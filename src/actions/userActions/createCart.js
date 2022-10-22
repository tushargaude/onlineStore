"use strict";

const { BadRequestError } = require("../../errors");
const { itemExists } = require("./common/itemExists");

module.exports.createCart = async (models, reqBody) => {
  var skip=[];
  var create=[];
  for (var i = 0; i < reqBody.length; i++) {
    await validateReqBody(reqBody, models,i);
    let itemId=parseInt(reqBody[i].itemId);
    let quantity=parseInt(reqBody[i].quantity);
    
    let item = await itemExist(itemId, models);
    if(item){
      const cart = await models.cart.create({
        itemId: itemId,
        quantity: quantity,
      });
      create.push(" itemId: "+itemId+"");
    }else{
      skip.push(" itemId: "+itemId+" ");
    }
  }
  return Promise.resolve({Created: create,Skip:skip});
};

const itemExist = async (itemId, models) => {
  let item = await itemExists({ id: `${itemId}` }, models);
  return item ? item : false;
};

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
};