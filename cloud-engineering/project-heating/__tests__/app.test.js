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
      zone: {
        S: "Test Zone",
      },
      temperature: {
        N: "21",
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

describe("Heating Service", () => {
  test("GET /api/heating - should respond with a list of all zones and temperatures ", async () => {
    const {
      body: { zones },
    } = await request(app).get("/api/heating").expect(200);

    expect(zones.length).toBeGreaterThan(0);
    zones.forEach((zone) => {
      expect(zone).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          zone: expect.any(String),
          temperature: expect.any(Number),
        })
      );
    });
  });

  test("GET /api/heating/zone/id", async () => {
    const {
      body: { zone },
    } = await request(app).get("/api/heating/zone/1").expect(200);

    expect(zone).toEqual({
      id: "1",
      zone: "Test Zone",
      temperature: 21,
    });
  });

  test("POST /api/heating/zone - should add a new zone", async () => {
    const newZone = {
      zone: "living room",
      temperature: 19,
    };
    let addedID;

    try {
      const {
        body: { zone },
      } = await request(app)
        .post("/api/heating/zone")
        .send(newZone)
        .expect(201);

      expect(zone).toEqual(
        expect.objectContaining({
          ...newZone,
          id: expect.any(String),
        })
      );
      addedID = zone.id;
    } finally {
      //remove test data from db
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
            N: addedID,
          },
        },
      });
      await client.send(command);
    }
  });

  test("PATCH /api/heating/zone/:id - should update the temperature of the zone", async () => {
    const newTempJSON = { temperature: 25 };

    const {
      body: { zone },
    } = await request(app).patch("/api/heating/zone/1").send(newTempJSON);

    expect(zone).toEqual(
      expect.objectContaining({
        ...newTempJSON,
        id: "1",
        zone: "Test Zone",
      })
    );
  });
});

describe("Errors", () => {
  test("GET /api/heating/zone/:id - 400 if the id is not a number", async () => {
    const {
      body: { msg },
    } = await request(app).get("/api/heating/zone/one").expect(400);

    expect(msg).toBe("ID must contain only numbers");
  });

  test("POST /api/heating/zone - 400 if the zone is not included", async () => {
    const brokenBody = { temperature: 19 };

    const {
      body: { msg },
    } = await request(app)
      .post("/api/heating/zone")
      .send(brokenBody)
      .expect(400);

    expect(msg).toBe("No zone included");
  });

  test("POST /api/heating/zone - 400 if the temperature is not included", async () => {
    const brokenBody = { zone: "test" };

    const {
      body: { msg },
    } = await request(app)
      .post("/api/heating/zone")
      .send(brokenBody)
      .expect(400);

    expect(msg).toBe("No temperature included");
  });
  test("POST /api/heating/zone - 400 if the temperature does not contain only numbers", async () => {
    const brokenBody = { zone: "test", temperature: "one" };

    const {
      body: { msg },
    } = await request(app)
      .post("/api/heating/zone")
      .send(brokenBody)
      .expect(400);

    expect(msg).toBe("Temperature must contain only numbers");
  });
  test("PATCH /api/heating/zone/:id - 404 if the id does not exist", async () => {
    const brokenBody = { temperature: 18 };

    const {
      body: { msg },
    } = await request(app)
      .patch("/api/heating/zone/100001")
      .send(brokenBody)
      .expect(404);

    expect(msg).toBe("ID not found");
  });
  test("PATCH /api/heating/zone/:id - 400 if the id does not contain only numbers", async () => {
    const brokenBody = { temperature: 18 };

    const {
      body: { msg },
    } = await request(app)
      .patch("/api/heating/zone/one")
      .send(brokenBody)
      .expect(400);

    expect(msg).toBe("ID must contain only numbers");
  });
  test("PATCH /api/heating/zone/:id - 400 if the temperature is not only numbers", async () => {
    const brokenBody = { temperature: "one" };

    const {
      body: { msg },
    } = await request(app)
      .patch("/api/heating/zone/1")
      .send(brokenBody)
      .expect(400);

    expect(msg).toBe("Temperature must contain only numbers");
  });
});
