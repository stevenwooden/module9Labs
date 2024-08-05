const axios = require('axios');

exports.getWeatherByCity = async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.OPENWEATHER_API_KEY;

    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

    exports.getWeatherByCityId = async (req, res) => {
    const cityId = req.params.cityId;
    const apiKey = process.env.OPENWEATHER_API_KEY;

    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};