import express from "express";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

const port = process.env.PORT || 8080;

app.get("/", (_req, res) => {
  res.send("Bienvenido a Adopta un Junio!");
});
app.listen(port, () => {
  console.log(`AdoptaUnJunior_API: Listening on port ${port}`);
});

module.exports = app;
