// src/database/init.ts
import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pozos_db",
  password: "password",
  port: 5432,
});

export async function initializeDatabase() {
  const query = `
    CREATE TABLE IF NOT EXISTS pozos (
      id SERIAL PRIMARY KEY,
      nombre TEXT NOT NULL,
      ubicacion TEXT NOT NULL,
      produccion_diaria NUMERIC NOT NULL,
      estado TEXT CHECK (estado IN ('activo', 'inactivo')) NOT NULL
    );
    INSERT INTO pozos (nombre, ubicacion, produccion_diaria, estado)
    VALUES 
      ('Pozo A', 'Ubicación 1', 1000, 'activo'),
      ('Pozo B', 'Ubicación 2', 500, 'inactivo'),
      ('Pozo C', 'Ubicación 3', 1200, 'activo'),
      ('Pozo D', 'Ubicación 4', 800, 'activo'),
      ('Pozo E', 'Ubicación 5', 300, 'inactivo');
  `;
  await pool.query(query);
}

initializeDatabase()
  .then(() => console.log("Base de datos inicializada"))
  .catch((err) => console.error("Error al inicializar la base de datos:", err));
