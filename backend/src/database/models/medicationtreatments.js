import { Model, DataTypes } from "sequelize";
export class MedicationTreatments extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

export const initMedicationTreatments = (sequelize) => {
  MedicationTreatments.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      medication_id: DataTypes.INTEGER,
      treatment_id: DataTypes.INTEGER,
      start_date: DataTypes.DATE,
      finish_date: DataTypes.DATE,
      description: DataTypes.STRING,
      dosage: DataTypes.STRING,
      pre_trasplant: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      period: DataTypes.INTEGER,
      suspended: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    },
    {
      sequelize,
      modelName: "MedicationTreatments",
      tableName: "medication_treatments",
    }
  );
  return MedicationTreatments;
};
