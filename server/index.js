const express = require("express");
const cors = require("cors");
const { auth } = require("express-openid-connect");
require("dotenv").config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(auth(config));

app.get("/", (req, res) => {
  console.log(req.oidc.isAuthenticated());
  res.send("Hello World from / route!");
});

app.get("/profile", (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
