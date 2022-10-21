"use strict";

/**
 * @params {models}
 *
 * @returns {object} eg: {users: [{id: integer, name:string, email:string}]}
 *
 * Fetches all users
 */

module.exports.getItems = async (models) => {
  const items = await models.items.findAll({
    attributes: ["id", "name", "price","description"],
  });
  return Promise.resolve({ items: items});
};
