const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api");


router.post("/getAirport", apiController.getAirport);
//map
router.post("/getAirportMap", apiController.getAirportMap);

module.exports = router;
