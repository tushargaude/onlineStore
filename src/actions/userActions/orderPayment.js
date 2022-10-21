"use strict";

const { BadRequestError } = require("../../errors");

module.exports.orderPayment = async (models,id) => {

    await validateReqBody(id, models);
    const order = await checkIfOrderExists(id, models);
    console.log(order)
    if(order){
        return Promise.resolve("Payment of order "+order.id +" is cash on delivery.");
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