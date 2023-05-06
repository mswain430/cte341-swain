const express = require('express');

const professionalController = require('../controllers/professional');

const routes = express.Router();

// GET/feeds/post

routes.get('/', professionalController.getData);

// localhost:8080/professional

module.exports = routes;
