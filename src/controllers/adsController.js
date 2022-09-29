const db = require("../db/db");

const getAds = (req, res) => {
  try {
    db.getCollections().then((result) => {
      res.json(result);
    });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const newAd = (req, res) => {
  try {
    db.putNewAd(req.body).then(() => {
      res.status(200).json({ success: "Successfully inserted" });
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
};

const updateAd = (req, res) => {
  const { _id, ...user_details } = req.body;
  console.log(user_details);
  db.updateAd(_id, user_details)
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((e) => {
      res.status(501).json({ success: false, error: e });
    });
};

const deleteAd = (req, res) => {
  db.deleteAd(req.body.id)
    .then(() => {
      res.send({ success: true });
    })
    .catch((e) => {
      res.status(500).json({ error: e });
    });
};

module.exports = { deleteAd, updateAd, newAd, getAds };
