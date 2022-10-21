"use strict";

const { BadRequestError } = require("../../errors");
const { userExists } = require("./common/userExists");

/**
 * @params {reqBody} type: Object {name:string, email:string} **required**
 * @params {models} sequelize models **required**
 * @returns userId type: Object eg: {userId:integer}
 *
 * Creates user. checks if user exists on email key
 */
module.exports.createUser = async (models, reqBody) => {
  await validateReqBody(reqBody, models);
  const user = await models.users.create({
    name: reqBody.name,
    email: reqBody.email,
  });
  return Promise.resolve({ userId: user.id });
};

const validateReqBody = async (reqBody, models) => {
  if (!Object.keys(reqBody).length > 0) {
    throw new BadRequestError("Req body missing");
  }
  if (!reqBody.name) {
    throw new BadRequestError("name property missing in reqBody");
  }
  if (!reqBody.email) {
    throw new BadRequestError("email property missing in reqBody");
  }
  if (reqBody.email) {
    let user = await userExists({ email: `${reqBody.email}` }, models);
    if (user) {
      throw new BadRequestError(`User with ${reqBody.email} already exists`);
    }
  }
};
