const request = require("supertest");
const app = require("./../index");

describe("GET /", () => {
  it("respond with hello world", (done) => {
    request(app).get("/").expect("Hello world", done);
  });
});
