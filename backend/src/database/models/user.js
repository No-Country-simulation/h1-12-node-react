import { Model, DataTypes } from "sequelize";

export class User extends Model {
  static associate(models) {
    this.belongsTo(models.Role, {
      foreignKey: "role_id",
      as: "role",
    });
  }
}

export const initUser = (sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      phone: DataTypes.STRING,
      dni: DataTypes.STRING,
      image: DataTypes.STRING,
      province: DataTypes.STRING,
      locality: DataTypes.STRING,
      address: DataTypes.STRING,
      updated_pass: DataTypes.BOOLEAN,
      birthdate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      paranoid: true,
    }
  );
};
