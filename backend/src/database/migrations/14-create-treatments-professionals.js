'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('treatment_professionals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      treatment_id: {
        type: Sequelize.INTEGER,
      },
      professional_id: {
        type: Sequelize.INTEGER,
      },
      incorporation_date: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW, 
      },
      role: {
          type: Sequelize.STRING,
          allowNull: true,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('treatment_professionals');
  }
};