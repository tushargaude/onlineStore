"use strict";

module.exports.getCart = async (models) => {
  const cart = await models.cart.findAll({
    attributes: ["id", "itemId", "quantity"],
  });
  return Promise.resolve({ carts: cart });
};
