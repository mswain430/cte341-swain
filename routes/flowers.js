const express = require('express');
const routes = express.Router();

const flowerController = require('../controllers/flowers');

//routes.get('/', contactsController.getData);

routes.get('/', flowerController.getAll);

routes.get('contacts:id', flowerController.getSingle);

routes.post('/', flowerController.createFlower);

routes.put('/:id', flowerController.updateFlower);

routes.delete('/:id', flowerController.deleteFlower);

module.exports = routes;