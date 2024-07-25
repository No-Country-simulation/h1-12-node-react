'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const medicationTreatments = await (async () => {
      const data = await import('../data-seed/medications_treatments-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('Medication_Treatments', medicationTreatments, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Medications_Treatments', null, {});
  }
}
