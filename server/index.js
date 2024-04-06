import cors from "cors";
import { config } from "dotenv";
import express from "express";
import connectDB from "./DB/connect_db.js";
import PostQroutes from "./routes/postquestionroutes.js";

// Config dotenv
config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(auth(config));

app.use("/api/v1", PostQroutes);

// Connect to DB
connectDB();

app.get("/", (req, res) => {
  res.redirect("http://localhost:5173");
});

app.get("/isauth", (req, res) => {
  const isAuthenticated = req.oidc.isAuthenticated();
  res.json(isAuthenticated);
});

app.get("/profile", (req, res) => {
  const profile = req.oidc.user;
  res.json(profile);
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`.green.bold);
});
