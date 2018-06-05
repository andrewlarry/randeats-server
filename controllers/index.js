/**
 * Defines the app routes and logic. Your controllers will
 * handle web requests, serve templates, and interact with
 * the models.
 */

const { Router } = require('express');
const path = require('path');

const { auth } = require('../middleware');

const router = Router();


// Send home page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Login attempt
router.post('/', auth, (req, res) => {

});

module.exports = router;