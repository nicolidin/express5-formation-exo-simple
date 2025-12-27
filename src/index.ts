import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";
import { errorHandler } from "./middlewares/error.middleware";
import { logger } from "./middlewares/logger.middleware";
import pingRoutes from "./routes/ping.route";
import healthRoutes from "./routes/health.route";
import userRoutes from "./routes/user.route";
import helloRoutes from "./routes/hello.route";
import noteRoutes from "./routes/note.route";

dotenv.config();

const app = express();
app.use(express.json()); // parse JSON body
app.use(logger); // ⚠️ Après express.json(), avant les routes
app.use(cors()); // Gère les CORS pour toutes les routes

// Route test
app.get("/", (req: Request, res: Response) => {
  res.json({ status: "server running", version: 1 });
});

// Routes
// ... (sera ajouté dans l'exercice)
app.use("/api", pingRoutes); // GET /api/ping
app.use("/api", healthRoutes);
app.use("/api/users", userRoutes);
app.use("/api", helloRoutes);
app.use("/api/notes", noteRoutes);
// ⚠️ errorHandler TOUJOURS en dernier
app.use(errorHandler);

// Démarrage serveur après connexion DB
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
});
