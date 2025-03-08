require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Import Routes
const authRoutes = require("./routes/auth");

// Use Routes (Place this before any other route definitions)
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("DevConnect API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
