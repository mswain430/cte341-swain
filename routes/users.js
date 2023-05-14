const express = require('express');
const routes = express.Router();

const userController = require('../controllers/user');

routes.get('/', userController.getAll);

routes.get('/', userController.getUser);

routes.post('/', userController.createUser);

routes.put('/:username', userController.updateUser);
routes.delete('/:username', userController.deleteUser);

module.exports = routes;