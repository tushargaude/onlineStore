const axios = require("axios");
const { truncate } = require("./helpers/truncate_tables");
const { stub } = require("./stub/user");

require("../app");

describe("Should create a user -->", () => {
  let apiResponse;

  beforeAll(async () => {
    await truncate();
    apiResponse = await createUser();
  });

  it("API should return 200 status", () => {
    expect(apiResponse["status"]).toBe(200);
  });

  it("Should return id of the created user", () => {
    expect(apiResponse["body"].type).toBe("success");
    expect(apiResponse["body"].message.userId).toBeGreaterThan(0);
  });

  it("user exists error should be thrown", async () => {
    try {
      await createUser();
    } catch (err) {
      expect(err.response.status).toBe(400);
      expect(err.response.data.type).toBe("error");
    }
  });
});

const createUser = async () => {
  toReturn = {};
  const response = await axios.post(
    "http://localhost:2000/serviceName/v1/users/create",
    stub.user
  );

  toReturn["status"] = response.status;
  toReturn["body"] = response.data;
  return toReturn;
};
