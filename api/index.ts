import { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Definir la lógica del endpoint directamente en la función exportada
export default function (req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET" && req.url === "/api/hello") {
    console.log("Hola soy el endpoint GET /api");
    return res.json({
      message: "¡Hola desde Express con TypeScript en Vercel!",
    });
  }

  // Si no coincide con el endpoint, retorna un 404
  return res.status(404).send("Not Found");
}
