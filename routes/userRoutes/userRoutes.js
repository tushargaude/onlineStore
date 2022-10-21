"use strict";

const {
  UserController,
} = require("../../src/controllers/userController/userController");
const { baseRouteUrl } = require("../globalVariables");

const UserRoutes = (app, auth) => {
  app.get(`${baseRouteUrl}/users/list`, UserController.getUsers);
  app.post(`${baseRouteUrl}/users/create`, UserController.createUser);
  app.patch(`${baseRouteUrl}/users/update/:userId`, UserController.updateUser);
  app.delete(`${baseRouteUrl}/users/delete/:userId`, UserController.deleteUser);
};

module.exports = UserRoutes;
