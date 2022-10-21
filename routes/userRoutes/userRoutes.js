"use strict";

const {
  UserController,
} = require("../../src/controllers/userController/userController");
const { baseRouteUrl } = require("../globalVariables");

const UserRoutes = (app, auth) => {
  app.post(`${baseRouteUrl}/items/list/`, UserController.createItems);
  app.get(`${baseRouteUrl}/items/list/`, UserController.getItems);

};

module.exports = UserRoutes;
