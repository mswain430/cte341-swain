const express = require('express');
const routes = express.Router();

const contactsController = require('../controllers/gardenerContacts');
//const validation = require('../middleware/validate')
const {isAuthenticated} = require("../middleware/authenticate")

//routes.get('/', contactsController.getData);

routes.get('/', contactsController.getAll);

routes.get('/:id', contactsController.getSingle);  

routes.post('/', isAuthenticated, contactsController.createContact);

routes.put('/:id', isAuthenticated, contactsController.updateContact);

routes.delete('/:id', isAuthenticated, contactsController.deleteContact);

module.exports = routes;