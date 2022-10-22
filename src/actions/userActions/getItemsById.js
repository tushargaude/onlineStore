"use strict";

const { BadRequestError } = require("../../errors");

module.exports.getItemsById = async (models,id) => {
  await validateReqBody(id, models);
  const item = await checkIfItemExists(id, models);
  if(item) {
      return Promise.resolve({ item: item });
  }
  else {
    throw new BadRequestError("item of id "+id+" does not exits");
  }
};
  
const validateReqBody = async (id) => {
  if (!id)
    throw new BadRequestError("id missing");
};

const checkIfItemExists = async (id, models) => {
  const item = await models.items.findOne({
    where: {
      id: id,
    },
  });
  return item ? item : false;
};