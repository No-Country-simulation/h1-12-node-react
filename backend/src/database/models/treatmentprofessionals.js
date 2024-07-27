import { Model, DataTypes } from "sequelize";

export class TreatmentProfessionals extends Model {}

export const initTreatmentProfessionals = (sequelize) => {
    TreatmentProfessionals.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        treatment_id: {
          type: DataTypes.INTEGER,
        },
        professional_id: {
          type: DataTypes.INTEGER,
        },
        incorporation_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW, 
        },
        role: {
            type: DataTypes.STRING,
            allowNull: true,
        }
      },
      {
        sequelize,
        modelName: 'TreatmentProfessionals',
        tableName: 'treatment_professionals',
      }
    );
    return TreatmentProfessionals;
};