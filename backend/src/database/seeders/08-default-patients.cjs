'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const patients = await (async () => {
      const data = await import('../data-seed/patients-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('Patients', patients, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Patients', null, {});
  }
}
