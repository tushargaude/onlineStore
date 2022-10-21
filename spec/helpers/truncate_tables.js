const chalk = require("chalk");
const models = require("../../models");
module.exports.truncate = async () => {
  if (process.env.NODE_ENV === "local") {
    console.log(chalk.bold.bgGray.black("    TRUNCATING THE TABLES"));
    await models.sequelize.truncate();
  }
};
