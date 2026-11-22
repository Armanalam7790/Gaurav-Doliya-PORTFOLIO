
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import resumeRoutes from "./routes/resumeRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.resolve(__dirname, "../uploads");

const app = express();

app.use(cors());
app.use(express.json());

// Resume Routes
app.use("/api/resume", resumeRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio Backend is running");
});

app.use(
  "/uploads",
  express.static(uploadsDir, {
    setHeaders: (res) => {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "inline");
    }
  })
);

// Error handling middleware for Multer and other errors
app.use((err, req, res, next) => {
  if (err) {
    return res.status(400).json({
      success: false,
      message: err.message || "File upload failed"
    });
  }
  next();
});

export default app;
