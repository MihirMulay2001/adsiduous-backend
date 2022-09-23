const express = require("express");
const db = require("../db/db.js");
const cors = require("cors");

const app = express();
const port = 4444;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/ads", (req, res) => {
  db.getCollections().then((result) => {
    res.json(result);
  });
});

app.post("/newad", (req, res) => {
  console.log("first line", req.body);
  try {
    db.putNewAd(req.body).then(() => {
      res.status(200).json({ success: "Successfully inserted" });
    });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});

app.put("/changead", (req, res) => {
  db.changeAd().then(() => {
    res.send("changead");
  });
});

app.patch("/updateUser", function (req, res) {
  const { _id, ...user_details } = req.body;
  console.log(user_details);
  db.updateAd(_id, user_details)
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((e) => {
      res.status(501).json({ success: false, error: e });
    });
});

app.delete("/deletead", (req, res) => {
  db.deleteAd(req.body.id).then(() => {
    res.send({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
