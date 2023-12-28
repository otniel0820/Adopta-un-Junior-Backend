import express from "express";
import cors from "cors";
import { routerApi } from "./routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;

app.get("/", (_req, res) => {
  res.send("Bienvenido a Adopta un Junio!");
});

routerApi(app)
app.listen(port, () => {
  console.log(`AdoptaUnJunior_API: Listening on port ${port}`);
});

module.exports = app;
