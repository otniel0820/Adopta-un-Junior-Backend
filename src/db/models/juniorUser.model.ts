import { Model, DataTypes } from "sequelize";

const JUNIOR_TABLE = "juniors";

export class Junior extends Model {
  static config(sequelize: any) {
    return {
      sequelize,
      tableName: JUNIOR_TABLE,
      modelName: "Junior",
      timestamps: true,
    };
  }
}

export const JuniorSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
      allowNull: false,
    type: DataTypes.STRING,
    field: "name",
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    isEmail: true,
    field: "email",
  },
  password: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "password",
  },
};
