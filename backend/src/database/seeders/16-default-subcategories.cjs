'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const intakes = await (async () => {
      const data = await import('../data-seed/subcategories-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('SubCategories', intakes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SubCategories', null, {});
  }
}
