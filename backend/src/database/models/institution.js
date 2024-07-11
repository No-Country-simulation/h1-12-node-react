'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Institution extends Model {
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
      this.belongsToMany(models.Professional, {
        through: 'institution_professionals',
        foreignKey: 'institution_id',
        otherKey: 'professional_id',
        as: 'professionals',
      })
    }
  }
  Institution.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    type: DataTypes.STRING,
    province: DataTypes.STRING,
    locality: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Institution',
    tableName: 'institutions'
  });
  return Institution;
};