'use strict';

module.exports =  {
  up: async (queryInterface, Sequelize) => {
    const rolesPermissions = await (async () => {
      const data = await import('../data-seed/roles_permissions-data.mjs');
      return data.default;
    })();

    await queryInterface.bulkInsert('Roles_Permissions', rolesPermissions, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles_Permissions', null, {});
  }
};
