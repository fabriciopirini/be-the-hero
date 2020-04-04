const req = require("supertest");

const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("NPO", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new NPO", async () => {
    const res = await req(app).post("/npos").send({
      name: "Brazil",
      email: "contact@apad.com",
      whatsapp: "+55 (16) 99717-5766",
      city: "Oslo",
      country: "Norway",
    });

    expect(res.body).toHaveProperty("id");
    expect(res.body.id).toHaveLength(8);
  });
});
