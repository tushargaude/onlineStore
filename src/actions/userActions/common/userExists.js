//@ts-check

/**
 * @params email {string}
 * @params models {sequelize models}
 * @returns Promise<user> | Promise<false> if user exists it returns user details else false
 */

module.exports.userExists = async (searchKey, models) => {
  if (Object.keys(searchKey).length > 0) {
    console.log(searchKey)
    const user = await models.users.findOne({
      where: searchKey
    });
    return user ? user : false;
  }
};
