const CityController = require("../../controllers/city-controllers");
const flightcontroller = require("../../controllers/flight-controller");

const express = require("express");

const router = express.Router();


router.post("/city" , CityController.create);
router.get("/city/:id" , CityController.getcity);
router.delete("/city/:id" , CityController.destroy);
router.get("/city" , CityController.getall);
router.patch("/city/:id" , CityController.update);
router.post("/flights" , flightcontroller.createFlight );
module.exports = router;