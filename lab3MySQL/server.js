
const express = require('express');
let dbConnect = require("./dbConnect");
let userRoute = require('./routes/userRoute');
let commentRoute = require('./routes/commentRoute');
let postRoute = require('./routes/postRoute');
let likesRoute = require('./routes/likesRoute');


const app = express();


app.use('/api/user', userRoute);
app.use('/api/post', postRoute);
app.use('/api/likes', likesRoute);
app.use('/api/comment', commentRoute);

