import { Junior, JuniorSchema } from "./juniorUser.model";

export const septupModels = (sequelize: any) => {
  Junior.init(JuniorSchema, Junior.config(sequelize));
};
