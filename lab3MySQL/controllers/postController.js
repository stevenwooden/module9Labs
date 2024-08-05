const db = require('../models');
const Post = db.Post;
const Like = db.Like;
const Comment = db.Comment;

exports.createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

    exports.likePost = async (req, res) => {
    try {
        const like = await Like.create({ PostId: req.params.id, UserId: req.body.UserId });
        res.status(201).json(like);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

    exports.commentPost = async (req, res) => {
    try {
        const comment = await Comment.create({ ...req.body, PostId: req.params.id });
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};