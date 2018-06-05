const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Setup process.env variables
require('dotenv').config();

const router = require('./controllers');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('public'));
app.use(router);




app.listen(PORT, () => console.log('Listening on port 3000.')); 