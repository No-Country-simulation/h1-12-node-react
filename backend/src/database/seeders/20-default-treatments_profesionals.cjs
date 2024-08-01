'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const treatmentsProfessionals = await (async () => {
      const data = await import('../data-seed/treatments_professionals-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('treatment_professionals', treatmentsProfessionals, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('treatment_professionals', null, {});
  }
}
