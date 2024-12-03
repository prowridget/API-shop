const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/uploadController");

router.post("/postupdate", uploadController.uploadImage);

module.exports = router;

