import { Model, DataTypes } from "sequelize";
export class Jurisdiction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
export const initJurisdiction = (sequelize) => {
  Jurisdiction.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Jurisdiction',
    tableName: 'jurisdictions'
  });
  return Jurisdiction;
};