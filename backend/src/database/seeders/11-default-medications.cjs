'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const patients = await (async () => {
      const data = await import('../data-seed/medications-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('Medications', patients, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Medications', null, {});
  }
}