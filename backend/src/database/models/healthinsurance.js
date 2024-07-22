import { Model, DataTypes } from "sequelize";

export class HealthInsurance extends Model {
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
    this.belongsToMany(models.Professional, {
      through: "insurance_professionals",
      foreignKey: "health_insurance_id",
      otherKey: "professional_id",
      as: "professionals",
    });
  }
}

export const initHealthInsurance = (sequelize) => {
  HealthInsurance.init(
    {
      user_id: DataTypes.INTEGER,
      insurance_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "HealthInsurance",
      tableName: "health_insurances",
      paranoid: true,
    }
  );
  return HealthInsurance;
};
