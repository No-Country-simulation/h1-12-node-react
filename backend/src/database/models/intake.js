import { Model, DataTypes } from "sequelize";
export class Intake extends Model {
  static associate(models) {
    this.belongsTo(models.MedicationTreatments, {
      foreignKey: "medication_treatment_id",
      as: "medication_treatment",
    });
  }
}

export const initIntake = (sequelize) => {
  Intake.init(
    {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        medication_treatment_id: {
          allowNull: false,
          type: DataTypes.INTEGER
        },
        date:{
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW
        },
        taken: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN
        }
    },
    {
      sequelize,
      modelName: "Intake",
      tableName: "intakes",
    }
  );
  return Intake;
};
