'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const insurances = await (async () => {
      const data = await import('../data-seed/health_insurances-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('Health_Insurances', insurances, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Health_Insurances', null, {});
  }
}