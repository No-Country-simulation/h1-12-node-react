import { Model, DataTypes } from 'sequelize';
export class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Notification.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      })
    }
  }
export const initNotification = (sequelize) => {
  Notification.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: DataTypes.INTEGER,
    content: DataTypes.STRING,
    date: DataTypes.DATE,
    read: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Notification',
    tableName: 'notifications',
  });
  return Notification;
};