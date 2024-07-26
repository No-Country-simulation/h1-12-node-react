'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const intakes = await (async () => {
      const data = await import('../data-seed/categories-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('Categories', intakes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
}
