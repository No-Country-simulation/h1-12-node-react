'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('consultations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      patient_id: {
        allowNull: false,
        type: Sequelize.INTEGER, 
        references: {
          model: 'patients',
          key: 'id'
        },
      },
      professional_id: {
        allowNull: false,
        type: Sequelize.INTEGER, 
        references: {
          model: 'professionals',
          key: 'id'
        },
      },
      date: { 
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      status: { 
        type: Sequelize.ENUM,
        values: ['created', 'accepted', 'denied', 'finished'],
        defaultValue: 'created'
      },
      description: { 
        type: Sequelize.STRING,
        allowNull: true
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
    await queryInterface.dropTable('consultations');
  }
};