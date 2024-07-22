import { Model, DataTypes } from "sequelize";

export class InsuranceProfessional extends Model {}

export const initInsuranceProfessional = (sequelize) => {
    InsuranceProfessional.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        health_insurance_id: {
          type: DataTypes.INTEGER,
        },
        professional_id: {
          type: DataTypes.INTEGER,
        },
      },
      {
        sequelize,
        modelName: 'InsuranceProfessional',
        tableName: 'insurance_professionals',
      }
    );
    return TreatmentProfessional;
};