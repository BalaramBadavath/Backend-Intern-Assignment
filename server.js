const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const passport = require('./middlewares/authMiddleware');
app.use(passport.initialize());

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

// Import the router files
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Use the routers
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
  
app.get('/', function (req, res) {
    res.send('Welcome to our application');
})

app.listen(PORT, ()=>{
    console.log('listening on port 3002');
})