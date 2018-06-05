const express = require('express');
const path = require('path');

const router = require('./controllers');

const app = express();

app.use(express.static('public'));
app.use(router);

app.listen(3000, () => console.log('Listening on port 3000.')); 