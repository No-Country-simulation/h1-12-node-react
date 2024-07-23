import { Model, DataTypes } from "sequelize";
export class Document extends Model {
  static associate(models) {
    this.belongsTo(models.Treatment, {
      foreignKey: "treatment_id",
      as: "treatment",
    });
  }
}

export const initDocument = (sequelize) => {
  Document.init(
    {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        treatment_id: {
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
        link: { 
          type: DataTypes.STRING,
          allowNull: false
        },
        type: { 
          type: DataTypes.ENUM,
          values: ['prescription', 'other'],
          defaultValue: 'other'
        },
    },
    {
      sequelize,
      modelName: "Document",
      tableName: "documents",
    }
  );
  return Document;
};
