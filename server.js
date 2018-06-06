const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Setup process.env variables
require('dotenv').config();

const router = require('./controllers');

const app = express();



// Bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// Passport init 
app.use(passport.initialize());
app.use(passport.session());

// Set static folder
app.use(express.static('public'));

// Set routes
app.use(router);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Listening on port 3000.')); 