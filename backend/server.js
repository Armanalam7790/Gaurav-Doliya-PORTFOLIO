// import app    from './src/app.js'

// app.listen(3000, ()=>{
//     console.log('server start');
    
// })

import path from "path";
import { fileURLToPath } from "url";

// Load .env automatically in Node.js
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, ".env");

try {
  if (typeof process.loadEnvFile === "function") {
    process.loadEnvFile(envPath);
  }
} catch (_) {
  // Production / Render sets environment variables directly
}

import app from "./src/app.js";

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} mode on http://localhost:${PORT}`);
}); 