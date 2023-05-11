const express = require('express');
const routes = express.Router();
const flowerController = require('../controllers/flowers');
const validation = require('../middleware/validate')

//routes.get('/', contactsController.getData);

//#Garden-Flowers
routes.get('/', flowerController.getAll);

//#Garden-Flowers
routes.get('flowers:id', flowerController.getSingle); 

//#Garden-Flowers
routes.post('/', validation.saveFlower, flowerController.createFlower);

//#Garden-Flowers
routes.put('/:id', flowerController.updateFlower);

//#Garden-Flowers
routes.delete('/:id', flowerController.deleteFlower);

module.exports = routes;