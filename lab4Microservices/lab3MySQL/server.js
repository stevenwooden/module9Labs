
const express = require('express');
let dbConnect = require("./dbConnect");
const db = require('./models');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const weatherRoutes = require('./routes/weatherRoutes')
const app = express();

app.use('/api', userRoutes);
app.use('/api', postRoutes);
app.use('/api/weather', weatherRoutes)

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
