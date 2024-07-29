'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('documents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      treatment_id: {
        allowNull: false,
        type: Sequelize.INTEGER, 
        references: {
          model: 'treatments',
          key: 'id'
        },
      },
      date: { 
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      type: { 
        type: Sequelize.ENUM,
        values: ['prescription', 'other'],
        defaultValue: 'other'
      },
      description: { 
        type: Sequelize.STRING,
        allowNull: true
      },
      link: { 
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('documents');
  }
};