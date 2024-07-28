import { Model, DataTypes } from "sequelize";
export class Patient extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
    this.belongsTo(models.HealthInsurance, {
      foreignKey: "health_insurance_id",
      as: "health_insurance",
    });
    this.belongsToMany(models.Professional, {
      through: models.PatientProfessionals,
      foreignKey: "patient_id",
      otherKey: "professional_id",
      as: "professionals",
    });
    this.hasMany(models.PatientProfessionals, {
      foreignKey: "patient_id",
      as: "patient_professionals",
    })
    this.hasMany(models.Treatment, {
      foreignKey: "patient_id",
      as: "treatments",
    })
  }
}

export const initPatient = (sequelize) => {
  Patient.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      health_insurance_id: DataTypes.INTEGER,
      head_professional_id: DataTypes.INTEGER,
      sex: DataTypes.STRING,
      blood_factor: DataTypes.STRING,
      birthdate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Patient",
      tableName: "patients",
      paranoid: false,
    }
  );
  return Patient;
};
