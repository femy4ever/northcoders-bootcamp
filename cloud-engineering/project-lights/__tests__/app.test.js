const request = require("supertest");
const app = require("../app");
const {
  DynamoDBClient,
  PutItemCommand,
  DeleteItemCommand,
} = require("@aws-sdk/client-dynamodb");

beforeAll(async () => {
  // add a single test item into the db
  const client = new DynamoDBClient({
    region: "eu-west-2",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
  });

  const command = new PutItemCommand({
    TableName: process.env.TABLE_NAME,
    Item: {
      id: {
        N: "1",
      },
      location: {
        S: "Test Location",
      },
      status: {
        BOOL: false,
      },
    },
  });
  return await client.send(command);
});

afterAll(async () => {
  const client = new DynamoDBClient({
    region: "eu-west-2",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
  });

  const command = new DeleteItemCommand({
    TableName: process.env.TABLE_NAME,
    Key: {
      id: {
        N: "1",
      },
    },
  });
  return await client.send(command);
});

describe("Lights Service", () => {
  test("GET /api/lights - should respond with an array of light objects ", async () => {
    const { body } = await request(app).get("/api/lights").expect(200);

    expect(body.lights.length).toBeGreaterThan(0);
    body.lights.forEach((light) => {
      expect(light).toEqual(
        expect.objectContaining({
          location: expect.any(String),
          status: expect.any(Boolean),
        })
      );
    });
  });

  test("POST /api/lights - should allow a new light to be added with status as false as default", async () => {
    const newLight = { location: "Kitchen" };
    const { body } = await request(app)
      .post("/api/lights")
      .send(newLight)
      .expect(201);

    expect(body.light).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        ...newLight,
        status: false,
      })
    );

    const client = new DynamoDBClient({
      region: "eu-west-2",
      credentials: {
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
      },
    });

    const command = new DeleteItemCommand({
      TableName: process.env.TABLE_NAME,
      Key: {
        id: {
          N: body.light.id,
        },
      },
    });
    return await client.send(command);
  });

  test("POST /api/lights/switch - should allow to swap the boolean status for a light with each id", async () => {
    const light = { id: "1" };
    const { body } = await request(app)
      .post("/api/lights/switch")
      .send(light)
      .expect(202);

    expect(body.light).toEqual(
      expect.objectContaining({
        id: "1",
        location: "Test Location",
        status: true,
      })
    );
  });
});

describe("Errors", () => {
  test("POST /api/lights - should return 400 if no location given", async () => {
    const response = await request(app).post("/api/lights").send({});
    expect(response.status).toBe(400);
    expect(response.body.msg).toBe("No location included");
  });

  test("POST /api/lights/switch - should return 400 if no id given", async () => {
    const response = await request(app).post("/api/lights/switch").send({});
    expect(response.status).toBe(400);
    expect(response.body.msg).toBe("No ID included");
  });
  test("POST /api/lights/switch - should return 400 if id given is not a complete number string", async () => {
    const response = await request(app)
      .post("/api/lights/switch")
      .send({ id: "13141TEST13" });
    expect(response.status).toBe(400);
    expect(response.body.msg).toBe("ID must be an integer");
  });
  test("POST /api/lights/switch - should return 404 if ID doesn't exist ", async () => {
    const response = await request(app)
      .post("/api/lights/switch")
      .send({ id: "10" });
    expect(response.status).toBe(404);
    expect(response.body.msg).toBe("ID not found");
  });
});
