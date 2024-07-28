'use strict';

module.exports =  {
  up: async (queryInterface, Sequelize) => {
    const rolesPermissions = await (async () => {
      const data = await import('../data-seed/roles_permissions-data.mjs');
      return data.default;
    })();

    await queryInterface.bulkInsert('roles_permissions', rolesPermissions, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('roles_permissions', null, {});
  }
};
