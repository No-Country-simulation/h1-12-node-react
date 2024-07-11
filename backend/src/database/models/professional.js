'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professional extends Model {
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
      this.belongsTo(models.Speciality, {
        foreignKey: 'speciality_id',
        as: 'speciality'
      })
      this.hasMany(models.Patient, {
        foreignKey: 'head_professional_id',
        as: 'patients'
      })
    }
  }
  Professional.init({
    user_id: DataTypes.INTEGER,
    speciality_id: DataTypes.INTEGER,
    registration_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Professional',
    tableName: 'professionals'
  });
  return Professional;
};