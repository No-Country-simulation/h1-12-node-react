'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const institutions = await (async () => {
      const data = await import('../data-seed/institutions-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('Institutions', institutions, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Institutions', null, {});
  }
}