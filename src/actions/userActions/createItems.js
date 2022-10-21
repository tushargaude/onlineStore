"use strict";

const { BadRequestError } = require("../../errors");
const { itemExists } = require("./common/itemExists");


module.exports.createItems = async (models, reqBody) => {

    for (var i = 0; i < reqBody.length; i++) {
      await validateReqBody(reqBody, models,i);
      let name=(reqBody[i].name);
      let price=parseInt(reqBody[i].price);
      let description=( reqBody[i].description);
  
    const item = await models.items.create({
      name: name,
      price: price,
      description : description
    });
  }
  return Promise.resolve("Created");
}

const validateReqBody = async (reqBody, models,i) => {
    if (!Object.keys(reqBody).length > 0) {
      throw new BadRequestError("Req body missing");
    }
    if (!reqBody[i].name) {
      throw new BadRequestError("name property missing in reqBody");
    }
    if (!reqBody[i].price) {
      throw new BadRequestError("price property missing in reqBody");
    }
    if (reqBody[i].name) {
      let item = await itemExists({ name: `${reqBody[i].name}` }, models);
      if (item) {
        throw new BadRequestError(`Item with ${reqBody[i].name} already exists`);
      }
    }
  };