// src/routes/pozos.ts
import express, { Router, Request, Response } from "express";
import { pool } from "../database/init";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM pozos");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener los pozos" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const { nombre, ubicacion, produccion_diaria, estado } = req.body;

  if (!nombre || !ubicacion || !produccion_diaria || !estado) {
    return res.status(400).json({ error: "Datos incompletos" });
  }

  try {
    const query = `
      INSERT INTO pozos (nombre, ubicacion, produccion_diaria, estado)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const result = await pool.query(query, [nombre, ubicacion, produccion_diaria, estado]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Error al crear el pozo" });
  }
});

router.patch("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { estado } = req.body;

  if (!estado) {
    return res.status(400).json({ error: "Estado no proporcionado" });
  }

  try {
    const query = `
      UPDATE pozos
      SET estado = $1
      WHERE id = $2
      RETURNING *;
    `;
    const result = await pool.query(query, [estado, id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Pozo no encontrado" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Error al actualizar el pozo" });
  }
});

export default router;
