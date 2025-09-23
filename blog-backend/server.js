// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js"; // your MySQL pool

dotenv.config();

const app = express();

// Use PORT from environment or fallback to 5050
const PORT = process.env.PORT || 5050;

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

// Health check route (optional, useful for Passenger)
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

    const [rows] = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ message: "Database error" });
  }
});

// This ensures Passenger can detect the Node app
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
