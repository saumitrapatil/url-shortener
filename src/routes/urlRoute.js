const express = require("express");
const shortenUrl = require("../controllers/shortenUrl");
const redirectToOriginal = require("../controllers/redirectUrl");

const router = express.Router();

router.post("/shorten", shortenUrl);
router.get("/:shortId", redirectToOriginal);

module.exports = router;