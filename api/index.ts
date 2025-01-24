import express, { Request, Response } from "express";

const app = express();

// Middleware
app.use(express.json());

// Endpoints
app.get("/", (req: Request, res: Response) => {
  console.log("Hola soy el endpoint GET /api");

  res.json({ message: "¡Hola desde Express con TypeScript en Vercel!" });
});

// Exporta el handler para que funcione en Vercel
export default app;
