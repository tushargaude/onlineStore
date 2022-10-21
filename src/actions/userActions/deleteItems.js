"use strict";

const { ResourceNotFoundError } = require("../../errors");

module.exports.deleteItems = async (models,id) => {
  const item = await checkIfItemExists(id, models);
  
  if (item) {
    await models.items.destroy({
      where: {
        id: id,
      },
    });
  } else {
    throw new ResourceNotFoundError("item");
  }
};

const checkIfItemExists = async (id, models) => {
  const item = await models.items.findOne({
    where: {
      id: id,
    },
  });
  return item ? item : false;
};

