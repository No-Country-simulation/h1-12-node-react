import { Model, DataTypes } from "sequelize";
export class Professional extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
    this.belongsTo(models.Speciality, {
      foreignKey: "speciality_id",
      as: "speciality",
    });
    this.hasMany(models.Patient, {
      foreignKey: "head_professional_id",
      as: "patients",
    });
    this.belongsToMany(models.Institution, {
      through: "institution_professionals",
      foreignKey: "professional_id",
      otherKey: "institution_id",
      as: "institutions",
    });
    this.belongsToMany(models.Treatment, {
      through: "treatment_professionals",
      foreignKey: "professional_id",
      otherKey: "treatment_id",
      as: "treatments",
    });
    this.belongsToMany(models.HealthInsurance, {
      through: "insurance_professionals",
      foreignKey: "professional_id",
      otherKey: "health_insurance_id",
      as: "insurances",
    });
    this.belongsTo(models.Jurisdiction, {
      foreignKey: "jurisdiction_id",
      as: "jurisdiction",
    });
  }
}

export const initProfessional = (sequelize) => {
  Professional.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: DataTypes.INTEGER,
      speciality_id: DataTypes.INTEGER,
      registration_number: DataTypes.STRING,
      jurisdiction_id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Professional",
      tableName: "professionals",
    }
  );
  return Professional;
};
