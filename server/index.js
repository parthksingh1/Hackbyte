import cors from "cors";
import express from "express";
import connectDB from "./DB/connect_db.js";
import QuestionRoutes from "./routes/questionRoutes.js";
import {auth} from 'express-openid-connect';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import colors from 'colors';

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 3001;
const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL, 
};

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(auth(authConfig));

app.use("/api/v1", QuestionRoutes);

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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`.green.bold);
});
