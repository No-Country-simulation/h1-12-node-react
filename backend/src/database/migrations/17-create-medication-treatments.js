'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('medication_treatments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      medication_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'medications',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      treatment_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'treatments',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      start_date: {
        type: Sequelize.DATE
      },
      finish_date: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.STRING
      },
      dosage: {
        type: Sequelize.STRING
      },
      pre_trasplant: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      period: {
        type: Sequelize.INTEGER
      },
      suspended: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('medication_treatments');
  }
};