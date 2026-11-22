
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPublicDir = path.resolve(__dirname, "../../../frontend/public");

export const uploadResume = (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "Please upload a PDF"
    });
  }

  // Automatically sync uploaded resume to frontend public folder
  try {
    if (fs.existsSync(frontendPublicDir)) {
      fs.copyFileSync(req.file.path, path.join(frontendPublicDir, "CV_Gaurav_Doliya.pdf"));
      fs.copyFileSync(req.file.path, path.join(frontendPublicDir, "CV_Gaurav Doliya.pdf"));
      fs.copyFileSync(req.file.path, path.join(frontendPublicDir, "Gaurav_Doliya_CV_OCT_2026.pdf"));
      fs.copyFileSync(req.file.path, path.join(frontendPublicDir, "resume.pdf"));
    }
  } catch (err) {
    console.error("Failed to sync resume to frontend public folder:", err);
  }

  res.status(200).json({
    success: true,
    message: "Resume uploaded successfully",
    file: req.file.filename
  });
};
