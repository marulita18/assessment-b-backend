"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("stories", [
      {
        name: "LCD Soundsystem announce live return with 20 show-run in New York City",
        content:
          "LCD Soundsystem will return to the live stage later this year for a run of 20 gigs in New York City.The news arrives just a few months after frontman James Murphy said back in July that the band were on a full hiatus.",
        imageUrl:
          "https://www.grammy.com/sites/com/files/styles/news_detail_header/public/lcd-soundsystem-james-murphy-gettyimages-976816902.jpg?itok=1fK3bv8Q",
        spaceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lamar, Eminem, Mary J. Blige and Snoop Dogg to Perform at This Year’s Super Bowl",
        content:
          "For this year’s game at SoFi Stadium in Los Angeles, the NFL is giving the Super Bowl Halftime show a distinctly Los Angeles feel, as Compton natives Dr. Dre and Kendrick Lamar will be joined by Eminem, Mary J. Blige and Long Beach’s own Snoop Dogg.",
        imageUrl:
          "https://images0.persgroep.net/rcs/OfeZh7DNddFBicTU7q4Sl94Fbgc/diocontent/166431091/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8",
        spaceId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Scarlett Johansson and Disney settle ‘Black Widow’ lawsuit",
        content:
          "Scarlett Johansson has settled her legal dispute with Disney over the release of her standalone Marvel film Black Widow. Johansson announced the lawsuit on July 29, following the company’s decision to release Black Widow on its streaming service Disney+ at the same time it landed in cinemas.",
        imageUrl:
          "https://variety.com/wp-content/uploads/2021/09/Scarlett-Johansson-Disney-Lawsuit.jpg?w=681&h=383&crop=1",
        spaceId: 3,
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
    await queryInterface.bulkDelete("stories", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
