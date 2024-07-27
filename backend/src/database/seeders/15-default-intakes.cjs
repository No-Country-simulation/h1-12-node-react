'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const intakes = await (async () => {
      const data = await import('../data-seed/intakes-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('Intakes', intakes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Intakes', null, {});
  }
}
