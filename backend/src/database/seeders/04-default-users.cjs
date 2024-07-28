'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await (async () => {
      const data = await import('../data-seed/users-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
}
