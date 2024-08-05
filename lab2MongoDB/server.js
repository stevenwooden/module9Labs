const express = require('express');
const mongoose = require('mongoose');
let dbConnect = require("./dbConnect");
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', postRoutes);

mongoose.connect('mongodb://localhost:27017/social_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(error => {
  console.log('Connection error', error);
});