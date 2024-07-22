'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('insurance_professionals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      health_insurance_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'health_insurances',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      professional_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'professionals',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('insurance_professionals');
  }
};