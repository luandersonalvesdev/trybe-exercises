'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        username: 'jorel',
        password: '123',
      }
    ],
    {}
    ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {})
};
