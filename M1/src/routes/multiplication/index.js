const express = require('express');
const controller = require('./multiplication.controller');

const router = express.Router();

router.post('/multiplication', controller.multiplicate);

module.exports = router;