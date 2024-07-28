'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const treatments = await (async () => {
      const data = await import('../data-seed/treatments-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('treatments', treatments, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('treatments', null, {});
  }
}
