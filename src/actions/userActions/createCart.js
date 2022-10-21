"use strict";

const { BadRequestError } = require("../../errors");
const { cartExists } = require("./common/cartExists");


module.exports.createCart = async (models, reqBody) => {

    for (var i = 0; i < reqBody.length; i++) {
      await validateReqBody(reqBody, models,i);
      let itemId=parseInt(reqBody[i].itemId);
      let quantity=parseInt(reqBody[i].quantity);
  
    const item = await models.cart.create({
      itemId: itemId,
      quantity: quantity,
    });
  }
  return Promise.resolve("Created");
}

const validateReqBody = async (reqBody, models,i) => {
    if (!Object.keys(reqBody).length > 0) {
      throw new BadRequestError("Req body missing");
    }
    if (!reqBody[i].itemId) {
      throw new BadRequestError("itemId property missing in reqBody");
    }
    if (!reqBody[i].quantity) {
      throw new BadRequestError("quantity property missing in reqBody");
    }
    if (reqBody[i].itemId) {
      let cart = await cartExists({ itemId: `${reqBody[i].itemId}` }, models);
      if (cart) {
        throw new BadRequestError(`Item with ${reqBody[i].itemId} already exists`);
      }
    }
  };