'use strict'
const User = require('./user') //require the model
const Post = require('./post')
const Likes = require('./likes')
const Comment = require('./comment')


async function init() {
await User.sync(); // sync the model
await Post.sync();
await Likes.sync();
await Comment.sync();

};
init();
module.exports = {
User, Post, Likes, Comment // export the model
// also export any extra models here
};