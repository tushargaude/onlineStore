const axios = require("axios");

require("../app");

describe("check for health api -->", () => {
  let data = {};
  beforeAll(async () => {
    const response = await axios.get(
      "http://localhost:2000/serviceName/v1/health"
    );
    data["status"] = response.status;
    data["body"] = response.data;
  });

  it("Health API should return status 200", () => {
    expect(data["status"]).toBe(200);
  });

  it("should return an object with type and message keys", () => {
    expect(data["body"].type).toBe("success");
    expect(data["body"].message).toBe("Healthy");
  });
});
