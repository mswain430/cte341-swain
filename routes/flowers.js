const express = require('express');
const routes = express.Router();
const flowerController = require('../controllers/flowers');
const validation = require('../middleware/validate')

//routes.get('/', contactsController.getData);

routes.get('/', flowerController.getAll);

routes.get('flowers:id', flowerController.getSingle); 

routes.post('/', validation.saveFlower, flowerController.createFlower);

routes.put('/:id', flowerController.updateFlower);

routes.delete('/:id', flowerController.deleteFlower);

module.exports = routes;