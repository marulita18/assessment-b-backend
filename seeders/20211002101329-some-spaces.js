"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("spaces", [
      {
        title: "Mariel's space",
        description: "Welcome to my great space!",
        backgroundColor: "#408080",
        color: "#7B4080",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Giuli's space",
        description: "I share my thoughts here",
        backgroundColor: "pink",
        color: "red",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Magu's space",
        description: "Thank you for stopping by!",
        backgroundColor: "blueviolet",
        color: "green",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
