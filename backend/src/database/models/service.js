import { Model, DataTypes } from "sequelize";
export class Service extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    this.belongsTo(models.Category, {
      foreignKey: "category_id",
      as: "category",
    });
    this.belongsTo(models.SubCategory, {
      foreignKey: "subcategory_id",
      as: "subcategory",
    });
  }
}
export const initService = (sequelize) => {
  Service.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      category_id: DataTypes.INTEGER,
      subcategory_id: DataTypes.INTEGER,
      code: DataTypes.STRING,
      description: DataTypes.STRING,
      tariff: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Service",
      tableName: "services",
    }
  );
  return Service;
};
