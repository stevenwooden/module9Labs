let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js
// Adds a GET route to return all users
router.get('/:postID', (req, res) => {
Controllers.commentController.getComment(res,req.params.postID);
})
// Adds a POST route to create a new user
router.post('/create', (req, res) => {
Controllers.commentController.createComment(req.body, res);
})
module.exports = router;