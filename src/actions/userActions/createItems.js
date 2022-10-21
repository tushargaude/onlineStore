"use strict";

const { BadRequestError } = require("../../errors");
const { itemExists } = require("./common/itemExists");

module.exports.createItems = async (models, reqBody) => {

  var skip=[];
  var create=[];
    for (var i = 0; i < reqBody.length; i++) {
        await validateReqBody(reqBody, models,i);
        let name=(reqBody[i].name);
        let price=parseInt(reqBody[i].price);
        let description=( reqBody[i].description);
        let item = await itemExist(name, models);
      
        if (item) {
            skip.push(" name: "+name+" ");
          }else{
          const item = await models.items.create({
            name: name,
            price: price,
            description : description
          });
          create.push(" name: "+name+"");
        }
  }
  return ({Created: create,Skip:skip});
}

const itemExist = async (name, models) => {
  let item = await itemExists({ name: `${name}` }, models);
  return item ? item : false;
};


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
  };