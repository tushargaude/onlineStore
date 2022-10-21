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

  //carts
  async createCart() {
    try {
      const payload = await userAction.createCart(this.models, this.reqBody);
      this.respondWithSuccess(payload);
    } catch (err) {
      console.log(err);
      this.respondWithError(err);
    }
  }
  async getCart() {
    try {
      const payload = await userAction.getCart(this.models);
      this.respondWithSuccess(payload);
    } catch (err) {
      this.respondWithError(err);
    }
  }
  //order
  async createOrder() {
    try {
      const payload = await userAction.createOrder(this.models, this.reqBody);
      this.respondWithSuccess(payload);
    } catch (err) {
      console.log(err);
      this.respondWithError(err);
    }
  }
  async getOrder() {
    try {
      const payload = await userAction.getOrder(this.models);
      this.respondWithSuccess(payload);
    } catch (err) {
      this.respondWithError(err);
    }
  }

  async getOrderById() {
    try {
      const payload = await userAction.getOrderById(
        this.models,
        this.params.id
      );
      this.respondWithSuccess(payload);
    } catch (err) {
      this.respondWithError(err);
    }
  }

  async deleteOrder() {
    try {
      const payload = await userAction.deleteOrder(
        this.models,
        this.params.id
      );
      this.respondWithSuccess(payload);
    } catch (err) {
      this.respondWithError(err);
    }
  }

  async orderPayment() {
    try {
      const payload = await userAction.orderPayment(
        this.models,
        this.params.id
      );
      this.respondWithSuccess(payload);
    } catch (err) {
      this.respondWithError(err);
    }
  }

  async orderStatus() {
    try {
      const payload = await userAction.orderStatus(
        this.models,
        this.params.id
      );
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
  createCart:async (req, res) => {
    return new UserController(req, res).createCart();
  },
  getCart: async (req, res) => {
    return new UserController(req, res).getCart();
  },
  createOrder: async (req, res) => {
    return new UserController(req, res).createOrder();
  },
  getOrder: async (req, res) => {
    return new UserController(req, res).getOrder();
  },
  getOrderById: async (req, res) => {
    return new UserController(req, res).getOrderById();
  },
  deleteOrder: async (req, res) => {
    return new UserController(req, res).deleteOrder();
  },
  orderPayment: async (req, res) => {
    return new UserController(req, res).orderPayment();
  },
  orderStatus: async (req, res) => {
    return new UserController(req, res).orderStatus();
  },
};
