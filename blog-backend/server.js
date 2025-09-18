import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

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
    console.error(err);
    res.status(500).json({ message: "Database error" });
  }
});

const PORT = 5050;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));
