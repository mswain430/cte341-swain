const express = require('express');
const routes = express.Router();
const validation = require('../middleware/validate')

const contactsController = require('../controllers/gardenerContacts');

//routes.get('/', contactsController.getData);

routes.get('/', contactsController.getAll);

routes.get('contacts:id', contactsController.getSingle);  // change 5/10/23 contacts:id

routes.post('/', validation.saveContact, contactsController.createContact);

routes.put('/:id', contactsController.updateContact);

routes.delete('/:id', contactsController.deleteContact);

module.exports = routes;