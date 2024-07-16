'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const professionals = await (async () => {
      const data = await import('../data-seed/professionals-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('Professionals', professionals, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Professionals', null, {});
  }
}