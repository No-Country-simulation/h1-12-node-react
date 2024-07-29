'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const consultations = await (async () => {
      const data = await import('../data-seed/consultations-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('consultations', consultations, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('consultations', null, {});
  }
}
