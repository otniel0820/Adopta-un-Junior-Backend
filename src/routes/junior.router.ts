import express from "express";
import {
  getJunior,
  updateJunior,
  getJuniorById,
  deleteJunior,
  createJunior,
} from "../controller";

const routerJunior = express.Router();

routerJunior.get("/junior", getJunior);
routerJunior.get("/junior:id", getJuniorById);
routerJunior.post("/", createJunior);
routerJunior.put("/:id", updateJunior);
routerJunior.delete("/:id", deleteJunior);

export default routerJunior;
