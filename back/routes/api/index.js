const express = require('express');
const router = express.Router();
const shows = require('./shows');
const messages = require('./messages');

router.use('/contact', messages);
router.use('/shows', shows);

module.exports = router;
