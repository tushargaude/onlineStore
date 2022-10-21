"use strict";

const { ResourceNotFoundError } = require("../../errors");

module.exports.deleteUser = async (models, userId) => {
  const user = await checkIfUserExists(userId, models);
  if (user) {
    await models.users.destroy({
      where: {
        id: userId,
      },
    });
  } else {
    throw new ResourceNotFoundError("user");
  }
};

const checkIfUserExists = async (userId, models) => {
  const user = await models.users.findOne({
    where: {
      id: userId,
    },
  });
  return user ? user : false;
};

