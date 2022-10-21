"use strict";

const {
  UserController,
} = require("../../src/controllers/userController/userController");
const { baseRouteUrl } = require("../globalVariables");

const UserRoutes = (app, auth) => {
  app.post(`${baseRouteUrl}/items/list/`, UserController.createItems);
  app.get(`${baseRouteUrl}/items/list/`, UserController.getItems);
  app.get(`${baseRouteUrl}/items/list/:id`, UserController.getItemsById);
  app.delete(`${baseRouteUrl}/items/list/:id`, UserController.deleteItems);
  app.patch(`${baseRouteUrl}/items/list/:id`, UserController.updateItem);

  app.post(`${baseRouteUrl}/cart/list/`, UserController.createCart);
  app.get(`${baseRouteUrl}/cart/list/`, UserController.getCart);

  app.post(`${baseRouteUrl}/order/list/`, UserController.createOrder);

};

module.exports = UserRoutes;
