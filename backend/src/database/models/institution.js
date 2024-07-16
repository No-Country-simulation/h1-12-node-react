import { Model, DataTypes } from 'sequelize';
export class Institution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      })
      this.belongsToMany(models.Professional, {
        through: 'institution_professionals',
        foreignKey: 'institution_id',
        otherKey: 'professional_id',
        as: 'professionals',
      })
    }
  }
  export const initInstitution = (sequelize) =>{
    Institution.init({
      user_id: DataTypes.INTEGER,
      institution_name: DataTypes.STRING,
      institution_type: DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'Institution',
      tableName: 'institutions'
  });
  return Institution;
};