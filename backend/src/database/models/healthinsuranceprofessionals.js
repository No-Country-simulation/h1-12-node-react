import { Model, DataTypes } from "sequelize";

export class InsuranceProfessionals extends Model {}

export const initInsuranceProfessionals = (sequelize) => {
    InsuranceProfessionals.init(
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
        modelName: 'InsuranceProfessionals',
        tableName: 'insurance_professionals',
      }
    );
    return InsuranceProfessionals;
};