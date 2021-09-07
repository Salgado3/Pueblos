const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const apiController = require("../controllers/api");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.post("/getAirport", apiController.getAirport);
//map
router.post("/getAirportMap", apiController.getAirportMap);

module.exports = router;
