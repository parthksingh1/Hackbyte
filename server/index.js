import express from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./DB/connect_db.js";
import colors from "colors";
import PostQroutes from "./routes/postquestionroutes.js";

// Config dotenv
config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: false }));

app.use("/api/v1", PostQroutes );

// Connect to DB
connectDB();

const server = app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`.green.bold);
});