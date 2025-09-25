// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js"; // your MySQL pool
import fs from "fs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

// Catch uncaught exceptions and unhandled rejections
process.on("uncaughtException", (err) => {
  fs.appendFileSync("error.log", `[UNCAUGHT] ${new Date()}: ${err.stack}\n`);
  console.error(err);
});

process.on("unhandledRejection", (reason) => {
  fs.appendFileSync("error.log", `[REJECTION] ${new Date()}: ${reason}\n`);
  console.error(reason);
});

// CORS configuration
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://anpersonal.com", "https://anpersonal.com/blog"]
    : ["http://localhost:5173"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow curl or mobile apps
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `CORS policy does not allow access from the specified Origin.`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

app.use(express.json());

// Health check route
app.get("/test", (req, res) => {
  res.json({ message: "Server is working" });
});

// Get posts from MySQL
app.get("/posts", async (req, res) => {
  const category = req.query.category || null;
  try {
    let query = "SELECT * FROM posts ORDER BY created_at DESC";
    const params = [];

    if (category) {
      query = "SELECT * FROM posts WHERE category = ? ORDER BY created_at DESC";
      params.push(category);
    }

    console.log("Executing query:", query, params); 

    const [rows] = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    // Log full error to console and file
    console.error("Database error:", err);
    fs.appendFileSync("error.log", `[DB ERROR] ${new Date()}: ${err.stack}\n`);
    res.status(500).json({ message: "Database error", error: err.message });
  }
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});