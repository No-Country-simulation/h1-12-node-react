'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const permissions = await (async () => {
      const data = await import('../data-seed/permissions-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('Permissions', permissions, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Permissions', null, {});
  }
}