'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.User, {
        foreignKey: 'role_id',
        as: 'users'
      });
      this.belongsToMany(models.Permission, {
        through: 'roles_permissions',
        foreignKey: 'role_id',
        otherKey: 'permission_id',
        as: 'permissions'
      });
    }
  }
  Role.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Role',
    tableName: 'roles'
  });
  return Role;
};