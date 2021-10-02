"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "testuser",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mariel",
          email: "mariel@gmail.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Giuli",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
