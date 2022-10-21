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
  async getItemsById() {
    try {
      const payload = await userAction.getItemsById(
        this.models,
        this.params.id
      );
      this.respondWithSuccess(payload);
    } catch (err) {
      this.respondWithError(err);
    }
  }
  async deleteItems() {
    try {
      const payload = await userAction.deleteItems(
        this.models,
        this.params.id
      );
      this.respondWithSuccess(payload);
    } catch (err) {
      this.respondWithError(err);
    }
  }
  async updateItem() {
    try {
      const payload = await userAction.updateItem(this.models, this.reqBody, this.params.id);
      this.respondWithSuccess(payload);
    } catch (err) {
      this.respondWithError(err);
    }
  }

  async updateItem() {
    try {
      const payload = await userAction.updateItem(this.models, this.reqBody, this.params.id);
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
  getItemsById: async (req, res) => {
    return new UserController(req, res).getItemsById();
  },
  deleteItems: async (req, res) => {
    return new UserController(req, res).deleteItems();
  },
  deleteItems: async (req, res) => {
    return new UserController(req, res).deleteItems();
  },
  updateItem: async (req, res) => {
    return new UserController(req, res).updateItem();
  },
};
