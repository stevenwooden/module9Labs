let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js
// Adds a GET route to return all users
router.get('/likes', (req, res) => {
Controllers.likesController.getLikes(req, res);
})
// Adds a POST route to create a new user
router.post('/addlikes', (req, res) => {
Controllers.likesController.createLikes(req.body, res);
})
module.exports = router;