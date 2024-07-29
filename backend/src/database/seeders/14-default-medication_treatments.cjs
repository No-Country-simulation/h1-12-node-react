'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const medicationTreatments = await (async () => {
      const data = await import('../data-seed/medications_treatments-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('medication_treatments', medicationTreatments, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('medications_treatments', null, {});
  }
}
