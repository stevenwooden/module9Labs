const Post = require('../models/post');

exports.createPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).send(post);
    } catch (error) {
        res.status(400).send(error);
    }
    };

exports.likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
        post.likes.push(req.body.userId);
        await post.save();
        }
        res.status(200).send(post);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.commentPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        post.comments.push({
        user: req.body.userId,
        comment: req.body.comment
        });
        await post.save();
        res.status(200).send(post);
    } catch (error) {
        res.status(400).send(error);
    }
};