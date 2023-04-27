const express = require('express');

const professionalController = require('../controllers');

const router = express.Router();

router.get('professional', professionalController.getData);

// localhost:8080/professional/
module.exports = router;