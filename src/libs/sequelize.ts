import { Sequelize } from "sequelize";
import { config } from "../config/config";
import { septupModels } from "../db/models";

const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: "postgresql",
  }
);

sequelize.sync();
septupModels(sequelize);


export default sequelize;
