const CityController = require("../../controllers/city-controllers");

const express = require("express");

const router = express.Router();

router.post("/city" , CityController.create);
router.get("/city/:id" , CityController.getcity);
router.delete("/city/:id" , CityController.destroy);
router.get("/city" , CityController.getall);
router.patch("/city/:id" , CityController.update);

module.exports = router;