'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const specialities = await (async () => {
      const data = await import('../data-seed/specialities-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('specialities', specialities, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('specialities', null, {});
  }
}
