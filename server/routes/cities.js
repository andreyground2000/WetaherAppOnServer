const express = require("express");
const router = express.Router();
const controller = require("../controllers/cities");
const path = require("path");


router.get("/", controller.getHtml);

router.get("/cities", controller.getCities);

router.get("/cities/:id", controller.getCityById);

router.post("/cities", controller.addNewCity);

router.put('/cities/:id', controller.updateCity);

router.delete('/cities/:id', controller.deleteCityById);

router.delete('/cities', controller.deleteAllCities); 


module.exports = router;