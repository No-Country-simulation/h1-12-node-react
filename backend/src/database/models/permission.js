import { Model, DataTypes } from "sequelize";
export class Permission extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    this.belongsToMany(models.Role, {
      through: "roles_permissions",
      foreignKey: "permission_id",
      otherKey: "role_id",
      as: "roles",
    });
  }
}

export const initPermission = (sequelize) => {
  Permission.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      permission: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Permission",
      tableName: "permissions",
    }
  );
  return Permission;
};
