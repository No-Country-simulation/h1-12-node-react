import { Model, DataTypes } from "sequelize";
export class Treatment extends Model {
  static associate(models) {
    this.belongsTo(models.Patient, {
      foreignKey: "patient_id",
      as: "patient",
    });
    this.belongsTo(models.Pathology, {
      foreignKey: "pathology_id",
      as: "pathology",
    });
    this.belongsToMany(models.Professional, {
      through: "institution_treatments",
      foreignKey: "institution_id",
      otherKey: "treatment_id",
      as: "treatments",
    });
  }
}

export const initTreatment = (sequelize) => {
  Treatment.init(
    {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        pathology_id: {
          allowNull: true,
          type: DataTypes.INTEGER
        },
        patient_id:{
          allowNull: false,
          type: DataTypes.INTEGER,
        },
        cycle: { 
          type: DataTypes.ENUM,
          values: ['created', 'current', 'finished'],
          allowNull: false,
          defaultValue: 'created'
        },
        status: { 
          type: DataTypes.ENUM,
          values: ['pre-trasplant', 'post-trasplant'],
          allowNull: false
        },
        start_date: { 
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW
        },
        finish_date: { 
          type: DataTypes.DATE,
          allowNull: true
        },
    },
    {
      sequelize,
      modelName: "Treatment",
      tableName: "treatments",
    }
  );
  return Treatment;
};
