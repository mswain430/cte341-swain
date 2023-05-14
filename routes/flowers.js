const express = require('express');
const routes = express.Router();
const flowerController = require('../controllers/flowers');
const validation = require('../middleware/validate')
//const { isAuthenticated } = require("../middleware/authenticate");
//routes.get('/', contactsController.getData);

routes.get('/', flowerController.getAll);

routes.get('/:id', flowerController.getSingle); 

routes.post('/',  validation.saveFlower, flowerController.createFlower);

routes.put('/:id', validation.saveFlower, flowerController.updateFlower);

routes.delete('/:id', flowerController.deleteFlower);

module.exports = routes;