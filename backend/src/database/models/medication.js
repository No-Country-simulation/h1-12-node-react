import { Model, DataTypes } from "sequelize";

export class Medication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Treatment, {
        through: "treatment_medications",
        foreignKey: "medication_id",
        otherKey: "treatment_id",
        as: "treatments",
      });
    }
  }
export const initMedication = (sequelize) => {
  Medication.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    medication_name: DataTypes.STRING,
    presentation: DataTypes.STRING,
    drug: DataTypes.STRING,
    code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Medication',
    tableName: 'medications',
    paranoid: true
  });
  return Medication;
};