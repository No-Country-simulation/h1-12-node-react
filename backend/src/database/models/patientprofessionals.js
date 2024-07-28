import { Model, DataTypes } from "sequelize";
export class PatientProfessionals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Patient, {
        foreignKey: "patient_id",
        as: "patient",
      });
      this.belongsTo(models.Professional, {
        foreignKey: "professional_id",
        as: "professional",
      });
    }
  }

export const initPatientProfessionals = (sequelize) => {
  PatientProfessionals.init({
    patient_id: DataTypes.INTEGER,
    professional_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PatientProfessionals',
    tableName: 'patient_professionals',
  });
  return PatientProfessionals;
};