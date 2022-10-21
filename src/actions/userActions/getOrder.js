"use strict";

/**
 * @params {models}
 *
 * @returns {object} eg: {users: [{id: integer, name:string, email:string}]}
 *
 * Fetches all users
 */

module.exports.getOrder = async (models) => {
  const order = await models.order.findAll({
    attributes: ["id", "cartId", "address","price","date"],
  });
  return Promise.resolve({ orders: order });
};
