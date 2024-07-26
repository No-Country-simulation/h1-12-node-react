'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const professionals = await (async () => {
      const data = await import('../data-seed/jurisdictions-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('Jurisdictions', professionals, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Jurisdictions', null, {});
  }
}