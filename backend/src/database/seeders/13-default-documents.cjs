'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const documents = await (async () => {
      const data = await import('../data-seed/documents-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('Documents', documents, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Documents', null, {});
  }
}
