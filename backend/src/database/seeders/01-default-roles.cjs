'use strict';

module.exports =  {
  up: async (queryInterface, Sequelize) => {
    const roles = await (async () => {
      const data = await import('../data-seed/roles-data.mjs');
      return data.default;
    })();

    await queryInterface.bulkInsert('Roles', roles, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
