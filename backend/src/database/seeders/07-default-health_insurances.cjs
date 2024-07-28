'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const insurances = await (async () => {
      const data = await import('../data-seed/health_insurances-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('health_insurances', insurances, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('health_insurances', null, {});
  }
}