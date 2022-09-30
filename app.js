const express = require("express");
const cors = require("cors");
// const authMiddleware = require("./middleware/auth-middleware");
// app.use("/", authMiddleware);
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const adsinfo = require("./src/routes/adsInfo");

app.use(express.json());
app.use("/ads", adsinfo);

app.listen(process.env.PORT || 4444, async () => {
  console.log("server hosted on local host 3000");
  console.log("database connected");
});
