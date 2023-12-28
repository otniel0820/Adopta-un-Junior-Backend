import express from "express";
import routerJunior from "./junior.router";

export const routerApi = (app: any) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/juniors", routerJunior);
};
