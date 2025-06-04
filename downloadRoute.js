// routes/downloadRoute.js
const express = require("express");
const router = express.Router();
const { downloadMedia } = require("../controllers/downloadController");

router.get("/", downloadMedia);

module.exports = router;
