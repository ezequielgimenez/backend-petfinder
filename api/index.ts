import { VercelRequest, VercelResponse } from "@vercel/node";

export default (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "GET" && req.url === "/hello") {
    console.log("Hola soy el endpoint GET /api/hello");

    res.json({ message: "¡Hola desde Express con TypeScript en Vercel!" });
  }
};
