//@ts-check

"use strict";

const { BadRequestError } = require("../../errors");
const { userExists } = require("./common/userExists");

/**
 * @params {object} reqBody eg: {name: string, email: string} **required**
 * @params {models} sequelize models object
 * @returns Promise<User> eg: {user:{name:string, email:string, id:integer}}
 */

module.exports.updateUser = async (models, reqBody, userId) => {
  console.log(userId)
  await validateReqBody(reqBody);
  const user = await userExists({ id: +userId }, models);
  try {
    if (user) {
      let updatObj = await sanitizeBody(reqBody);
      const updatedUser = await models.users.update(updatObj, {
        where: {
          id: user.id,
        },
      });
      return Promise.resolve(updatedUser);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const validateReqBody = async (reqBody) => {
  if (!reqBody) throw new BadRequestError("ReqBody missing");
  if (!reqBody.email && !reqBody.name)
    throw new BadRequestError("email or name required to update user");
};

const sanitizeBody = async (reqBody) => {
  let toReturn = {};
  Object.keys(reqBody).map((key) => {
    toReturn[key] = reqBody[key];
  });
  console.log(toReturn);
  return toReturn;
};
