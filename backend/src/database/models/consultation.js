import { Model, DataTypes } from "sequelize";
export class Consultation extends Model {
  static associate(models) {
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

export const initConsultation = (sequelize) => {
  Consultation.init(
    {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        patient_id: {
          allowNull: false,
          type: DataTypes.INTEGER
        },
        professional_id: {
            allowNull: false,
            type: DataTypes.INTEGER
          },
        date:{
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW
        },
        description: { 
          type: DataTypes.STRING,
          allowNull: true,
        },
        status: { 
          type: DataTypes.ENUM,
          values: ['created', 'accepted', 'denied', 'finished'],
          defaultValue: 'created'
        },
    },
    {
      sequelize,
      modelName: "Consultation",
      tableName: "consultations",
    }
  );
  return Consultation;
};
