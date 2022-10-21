"use strict";
const { userAction } = require("../../actions/userActions");
const { BaseController } = require("../baseController");

class UserController extends BaseController {
  constructor(req, res) {
    super(req, res);
  }

  async createUser() {
    try {
      const payload = await userAction.createUser(this.models, this.reqBody);
      this.respondWithSuccess(payload);
    } catch (err) {
      console.log(err);
      this.respondWithError(err);
    }
  }

  async updateUser() {
    try {
      const payload = await userAction.updateUser(this.models, this.reqBody, this.params.userId);
      this.respondWithSuccess(payload);
    } catch (err) {
      this.respondWithError(err);
    }
  }

  async deleteUser() {
    try {
      const payload = await userAction.deleteUser(
        this.models,
        this.params.userId
      );
      this.respondWithSuccess(payload);
    } catch (err) {
      this.respondWithError(err);
    }
  }

  async getUsers() {
    try {
      const payload = await userAction.getUsers(this.models);
      this.respondWithSuccess(payload);
    } catch (err) {
      this.respondWithError(err);
    }
  }
}

module.exports.UserController = {
  createUser: async (req, res) => {
    return new UserController(req, res).createUser();
  },
  updateUser: async (req, res) => {
    return new UserController(req, res).updateUser();
  },
  deleteUser: async (req, res) => {
    return new UserController(req, res).deleteUser();
  },
  getUsers: async (req, res) => {
    return new UserController(req, res).getUsers();
  },
};
