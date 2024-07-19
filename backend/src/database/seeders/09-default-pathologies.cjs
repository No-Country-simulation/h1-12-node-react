'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const patients = await (async () => {
      const data = await import('../data-seed/pathologies-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('Pathologies', patients, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pathologies', null, {});
  }
}
