"use strict";
const { userAction } = require("../../actions/userActions");
const { BaseController } = require("../baseController");

class UserController extends BaseController {
  constructor(req, res) {
    super(req, res);
  }
  async createItems() {
    try {
      const payload = await userAction.createItems(this.models, this.reqBody);
      this.respondWithSuccess(payload);
    } catch (err) {
      console.log(err);
      this.respondWithError(err);
    }
  }
  async getItems() {
    try {
      const payload = await userAction.getItems(this.models);
      this.respondWithSuccess(payload);
    } catch (err) {
      this.respondWithError(err);
    }
  }

}

module.exports.UserController = {
  createItems: async (req, res) => {
    return new UserController(req, res).createItems();
  },
  getItems: async (req, res) => {
    return new UserController(req, res).getItems();
  },
};
