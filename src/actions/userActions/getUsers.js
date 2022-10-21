"use strict";

/**
 * @params {models}
 *
 * @returns {object} eg: {users: [{id: integer, name:string, email:string}]}
 *
 * Fetches all users
 */

module.exports.getUsers = async (models) => {
  const users = await models.users.findAll({
    attributes: ["id", "name", "email"],
  });
  return Promise.resolve({ users: users });
};
