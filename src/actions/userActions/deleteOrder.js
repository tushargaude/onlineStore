"use strict";

const { ResourceNotFoundError } = require("../../errors");

module.exports.deleteOrder = async (models,id) => {
  const order = await checkIfOrderExists(id, models);
  if (order) {
    await models.order.destroy({
      where: {
        id: id,
      },
    });
  } else {
    throw new ResourceNotFoundError("order");
  }
};

const checkIfOrderExists = async (id, models) => {
  const order = await models.order.findOne({
    where: {
      id: id,
    },
  });
  return order ? order : false;
};

