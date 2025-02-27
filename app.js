// Creating our server

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authroute from "./routes/auth.js";
import postroute from "./routes/post.js"
import morgan from "morgan";
import cors from "cors"

// Load env variables
dotenv.config();

const app = express();

// this replaces bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(cors());

const PORT = process.env.PORT || 8000;

// homepage
app.get("/", (req, res) => {
  res.send("Welcome to the homepage");
});

// Auth Routes
app.use("/api/v1", authroute);

// Post Routes
app.use("/api/v1", postroute);

// connect to the database
const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("database successfully connected");
  } catch (error) {
    console.log(error);
  }
};
connection();

// Listing to server
app.listen(PORT, () => {
  console.log(`Server is running on port localhost:${PORT}`);
});
