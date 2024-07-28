'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const documents = await (async () => {
      const data = await import('../data-seed/documents-data.mjs');
      return data.default;
    })();
    await queryInterface.bulkInsert('documents', documents, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('documents', null, {});
  }
}
