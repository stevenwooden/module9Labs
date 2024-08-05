const express = require('express');
const postController = require('../controllers/PostController');
const router = express.Router();

router.post('/posts', postController.createPost);
router.post('/posts/:id/like', postController.likePost);
router.post('/posts/:id/comment', postController.commentPost);

module.exports = router;