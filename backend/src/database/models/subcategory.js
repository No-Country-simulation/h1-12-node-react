import { Model, DataTypes } from "sequelize";
export class SubCategory extends Model {
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
  }
}
export const initSubCategory = (sequelize) => {
  SubCategory.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      category_id: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "SubCategory",
      tableName: "subcategories",
    }
  );
  return SubCategory;
};
