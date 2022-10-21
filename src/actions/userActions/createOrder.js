"use strict";

const { BadRequestError } = require("../../errors");


module.exports.createOrder = async (models, reqBody) => {
  
  for (var i = 0; i < reqBody.length; i++) {
      await validateReqBody(reqBody, models,i);
      let cartId=(reqBody[i].cartId);
      let price=parseInt(reqBody[i].price);
      let address=( reqBody[i].address);
      let date=parseInt(reqBody[i].date);

    const item = await models.order.create({
        cartId: cartId,
        address: address,
        price: price,
        date: date,
    });
  }
  return Promise.resolve("Created");
}

const validateReqBody = async (reqBody, models,i) => {
    if (!Object.keys(reqBody).length > 0) {
      throw new BadRequestError("Req body missing");
    }
    if (!reqBody[i].cartId) {
      throw new BadRequestError("cartId property missing in reqBody");
    }
    if (!reqBody[i].address) {
      throw new BadRequestError("address property missing in reqBody");
    }
    if (!reqBody[i].price) {
        throw new BadRequestError("price property missing in reqBody");
    }
  };