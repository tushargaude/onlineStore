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
  app.get(`${baseRouteUrl}/order/list/`, UserController.getOrder);
  app.get(`${baseRouteUrl}/order/list/:id`, UserController.getOrderById);
  app.delete(`${baseRouteUrl}/order/list/:id`, UserController.deleteOrder);
  app.get(`${baseRouteUrl}/order/payment/:id`, UserController.orderPayment);

};

module.exports = UserRoutes;
