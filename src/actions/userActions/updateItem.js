//@ts-check

"use strict";

// @ts-ignore
const { BadRequestError } = require("../../errors");
const { itemExists } = require("./common/itemExists");

/**
 * @params {object} reqBody eg: {name: string, email: string} **required**
 * @params {models} sequelize models object
 * @returns Promise<User> eg: {user:{name:string, email:string, id:integer}}
 */

module.exports.updateItem = async (models, reqBody,id) => {
  console.log(id)
  await validateReqBody(reqBody,id);
  const item = await itemExists({ id: +id }, models);
  try {
    if (item) {
      let updatObj = await sanitizeBody(reqBody);
      const updatedItems = await models.items.update(updatObj, {
        where: {
          id: item.id,
        },
      });
      const updatedItem = await models.items.findOne({
        where: {
          id: id,
        },
      });
      console.log(updatedItem)
      return Promise.resolve({updatedItem : updatedItem.dataValues});
    }else{
        throw new BadRequestError("item of id "+id+" does not exits");
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const validateReqBody = async (reqBody,id) => {
    if (!reqBody) throw new BadRequestError("ReqBody missing");
    if (!reqBody.price)
        throw new BadRequestError("price required to update item");
    if (!id)
        throw new BadRequestError("item id required to update item");
};

const sanitizeBody = async (reqBody) => {
    
  let toReturn = {};
  Object.keys(reqBody).map((key) => {
    toReturn[key] = reqBody[key];
  });
  console.log(toReturn);
  return toReturn;
};
