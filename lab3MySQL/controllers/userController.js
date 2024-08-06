"use strict";
const Models = require('../model')
// finds all users in DB, then sends array as response
const getUser = (res) => {
Models.User.findAll({}).then(data => {
res.send({result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}
// uses JSON from request body to create new user in DB
const createUser = (data, res) => {
Models.User.create(data).then(data => {
res.send({ result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}
module.exports = {
getUser, createUser
}