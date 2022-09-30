const express = require("express");
// const cookieParser = require("cookie-parser");
const cors = require("cors");
// const authMiddleware = require("./middleware/auth-middleware");
// app.use("/", authMiddleware);
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const adsinfo = require("./src/routes/adsInfo");

// const users = require("./routes/user_route");
// const remixedsongs = require("./routes/remixedsong_route");

app.use(express.json());
app.use("/ads", adsinfo);

app.listen(process.env.PORT || 4444, async () => {
  console.log("server hosted on local host 3000");
  console.log("database connected");
});
