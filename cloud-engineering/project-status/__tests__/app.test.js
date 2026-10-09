// This test suit relies on the lights and heating services being available. You can supply the URL for these services via an env file in the format of the example

const request = require("supertest");
const app = require("../app");

describe("Status Service", () => {
  test("GET /api/status/health - should respond with 200 ", async () => {
    await request(app).get("/api/status/health").expect(200);
  });

  test("GET /api/status - should return an object containing the lights information", async () => {
    const {
      body: { lighting },
    } = await request(app).get("/api/status");

    expect(lighting.lights.length).toBeGreaterThan(0);
    expect(lighting.status).toBe(true);
    lighting.lights.forEach((light) => {
      expect(light).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          location: expect.any(String),
          status: expect.any(Boolean),
        })
      );
    });
  });

  test("GET /api/status - should return an object containing the heating information", async () => {
    const { body } = await request(app).get("/api/status");

    expect(body.heating.status).toBe(true);
    expect(body.heating.zones.length).toBeGreaterThan(0);
    body.heating.zones.forEach((zone) => {
      expect(zone).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          zone: expect.any(String),
          temperature: expect.any(Number),
        })
      );
    });
  });
});
