"use strict";

module.exports.getItems = async (models) => {
  const items = await models.items.findAll({
    attributes: ["id", "name", "price","description"],
  });
  return Promise.resolve({ items: items});
};
