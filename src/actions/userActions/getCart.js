"use strict";

/**
 * @params {models}
 *
 * @returns {object} eg: {users: [{id: integer, name:string, email:string}]}
 *
 * Fetches all users
 */

module.exports.getCart = async (models) => {
  const cart = await models.cart.findAll({
    attributes: ["id", "itemId", "quantity"],
  });
  return Promise.resolve({ carts: cart });
};
