let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js
// Adds a GET route to return all users
router.get('/', (req, res) => {
Controllers.postController.getPost(req, res);
})
// Adds a POST route to create a new user
router.post('/create', (req, res) => {
Controllers.postController.createPost(req.body, res);
})
module.exports = router;