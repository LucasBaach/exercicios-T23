'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
  [
    {
      title: 'O milagre da manhã',
      author: 'Hal Elrod',
      pageQuantity: 198,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Pai rico, pai pobre',
      author: 'Robert Kiyosaki',
      pageQuantity: 336,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  ],{}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Books', null, {}),
};
