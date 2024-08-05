const express = require('express');
const weatherController = require('../controllers/weatherController');
const router = express.Router();

// Route to get weather by city name (query parameter)
router.get('/', weatherController.getWeatherByCity);

// Route to get weather by city ID (path parameter)
router.get('/:cityId', weatherController.getWeatherByCityId);

module.exports = router;