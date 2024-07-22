'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('treatments', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
            },
        pathology_id: {
            allowNull: true,
            type: Sequelize.INTEGER, 
            references: {
                model: 'pathologies',
                key: 'id'
            },
        },
        patient_id:{
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'patients',
                key: 'id'
            },
        },
        cylce: { 
            type: Sequelize.ENUM,
            values: ['created', 'current', 'finished'],
            allowNull: false,
            defaultValue: 'created'
        },
        status: { 
            type: Sequelize.ENUM,
            values: ['pre-trasplant', 'post-trasplant'],
            allowNull: false
        },
        start_date: { 
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        finish_date: { 
            type: Sequelize.DATE,
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
    await queryInterface.dropTable('treatments');
  }
};