'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const intakes = await (async () => {
      const data = await import('../data-seed/services-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('Services', intakes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Services', null, {});
  }
}
