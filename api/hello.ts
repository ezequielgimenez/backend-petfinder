import express, { Request, Response } from "express";

// Crea una nueva instancia de Express en este archivo
const app = express();

// Middleware
app.use(express.json());

// Definir el endpoint GET en '/hello'
app.get("/hello", (req: Request, res: Response) => {
  console.log("Hola soy el endpoint GET /api/hello");
  res.json({ message: "¡Hola desde el endpoint /api/hello!" });
});

// Exporta el handler para Vercel
export default app;
