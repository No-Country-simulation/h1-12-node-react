'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InstitutionProfessionals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InstitutionProfessionals.init({
    institution_id: DataTypes.INTEGER,
    professional_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'InstitutionProfessionals',
    tableName: 'institution_professionals'
  });
  return InstitutionProfessionals;
};