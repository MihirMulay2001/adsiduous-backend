const express = require("express");
const router = express.Router();
const {
  getAds,
  newAd,
  updateAd,
  deleteAd,
} = require("../controllers/adsController.js");

router.get("/", getAds);
router.post("/newad", newAd);
router.patch("/updatead", updateAd);
router.delete("/deletead", deleteAd);

module.exports = router;
