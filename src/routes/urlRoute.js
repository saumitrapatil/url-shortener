const express = require("express");
const shortenUrl = require("../controllers/shortenUrl");
const redirectToOriginal = require("../controllers/redirectUrl");
const getStats = require("../controllers/stats");

const router = express.Router();

router.post("/shorten", shortenUrl);
router.get("/:shortId", redirectToOriginal);
router.get("/stats/:shortId", getStats);

module.exports = router;