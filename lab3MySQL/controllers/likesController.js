"use strict";
const Models = require('../model')
// finds all users in DB, then sends array as response
const getLikes = (res) => {
Models.Likes.findAll({}).then(data => {
res.send({result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}
// uses JSON from request body to create new user in DB
const createLikes = (data, res) => {
Models.Likes.create(data).then(data => {
res.send({ result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}
module.exports = {
getLikes, createLikes
}