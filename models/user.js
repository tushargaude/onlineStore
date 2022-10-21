"use strict";

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  });
  users.associate = function (models) {
    // associations can be defined here
  };
  return users;
};
