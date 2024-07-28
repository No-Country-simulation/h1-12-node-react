'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const intakes = await (async () => {
      const data = await import('../data-seed/subcategories-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('subcategories', intakes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('subcategories', null, {});
  }
}
