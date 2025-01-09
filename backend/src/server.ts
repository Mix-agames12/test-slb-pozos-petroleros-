import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { pool } from "./database/init";
import pozosRouter from "./routes/pozos";

const app: Application = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/pozos", pozosRouter);

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
