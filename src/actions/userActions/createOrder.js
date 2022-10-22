"use strict";

const { BadRequestError } = require("../../errors");

module.exports.createOrder = async (models, reqBody) => {
  
  var skip=[];
  var create=[];
  for (var i = 0; i < reqBody.length; i++) {
    await validateReqBody(reqBody, models,i);
    let cartId=(reqBody[i].cartId);
    let price=parseInt(reqBody[i].price);
    let address=( reqBody[i].address);
    let date=parseInt(reqBody[i].date);
    let cart = await checkIfCartExists(cartId, models);
  
    if(cart) {
      const order = await models.order.create({
          cartId: cartId,
          address: address,
          price: price,
          date: date,
      });
      create.push(" cartId: "+cartId+"");
    }else{     
      skip.push(" cartId: "+cartId+" ");
    }
  }
  return ({Created: create,Skip:skip});
}

const checkIfCartExists = async (id, models) => {
  const cart = await models.cart.findOne({
    where: {
      id: id,
    },
  });
  return cart ? cart : false;
};

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