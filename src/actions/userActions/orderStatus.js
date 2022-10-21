"use strict";

const { BadRequestError } = require("../../errors");

module.exports.orderStatus = async (models,id) => {

    await validateReqBody(id, models);
    const order = await checkIfOrderExists(id, models);
    if(order) {
        return Promise.resolve("order of id "+order.id +" is shipped.");
    }else {
      throw new BadRequestError("order of id "+id+" does not exits");
      }
  };
  
  const validateReqBody = async (id) => {
    if (!id) throw new BadRequestError("id missing");
  };

  const checkIfOrderExists = async (id, models) => {
    
    const order = await models.order.findOne({
      where: {
        id: id,
      },
    });
    return order ? order : false;
  };