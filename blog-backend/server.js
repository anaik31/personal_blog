import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// get a post
app.get("/posts", async (req, res) => {
  const category = req.query.category;
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


// Add a new post
app.post("/posts", async (req, res) => {
  const { title, content, author, category, image } = req.body; // added category & image
  try {
    const [result] = await db.query(
      "INSERT INTO posts (title, content, author, category, image) VALUES (?, ?, ?, ?, ?)",
      [title, content, author, category, image]
    );
    res.json({ id: result.insertId, title, content, author, category, image });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database error" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));