import { Model, DataTypes } from "sequelize";

export class Pathology extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
}
export const initPathology = (sequelize) => {
  Pathology.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      pathology_name: DataTypes.STRING,
      code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pathology",
      tableName: "pathologies",
      paranoid: true,
    }
  );
  return Pathology;
};
