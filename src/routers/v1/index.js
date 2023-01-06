const CityController = require("../../controllers/city-controllers");
const flightcontroller = require("../../controllers/flight-controller");
const AirportController = require("../../controllers/Airport-Controller");
const express = require("express");

const router = express.Router();


router.post("/city" , CityController.create);
router.get("/city/:id" , CityController.getcity);
router.delete("/city/:id" , CityController.destroy);
router.get("/city" , CityController.getall);
router.patch("/city/:id" , CityController.update);
router.post("/flights" , flightcontroller.createFlight );
router.get("/flights" , flightcontroller.getflights);
router.post("/airports" , AirportController.create);
router.get("/airports/:id" , AirportController.getAll);
router.patch("/airports/:id" , AirportController.update);
router.delete("/airports/:id" , AirportController.destroy);
router.get("/fetch" , flightcontroller.getbyId);
router.patch("/flight_update" , flightcontroller.updateflights);
module.exports = router;