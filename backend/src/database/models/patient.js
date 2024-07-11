'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      })
      this.belongsTo(models.Treatment, {
        foreignKey: 'active_treatment',
        as: 'active_treatment'
      })
      this.belongsTo(models.HealthInsurance, {
        foreignKey: 'health_insurance_id',
        as: 'health_insurance'
      })
      this.belongsTo(models.Professional, {
        foreignKey: 'head_professional_id',
        as: 'head_professional'
      })
    }
  }
  Patients.init({
    user_id: DataTypes.INTEGER,
    active_treatment: DataTypes.INTEGER,
    health_insurance_id: DataTypes.INTEGER,
    head_professional_id: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    blood_factor: DataTypes.STRING,
    birthdate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Patient',
    tableName: 'patients',
    paranoid: true
  });
  return Patients;
};