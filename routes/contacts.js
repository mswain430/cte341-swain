const express = require('express');
const routes = express.Router();
const contactsController = require('../controllers/contacts');
const validation = require('../middleware/validate');
//routes.get('/', contactsController.getData);

routes.get('/', contactsController.getAll);

routes.get('contacts:id', contactsController.getSingle);

routes.post('/', validation.saveContact, contactsController.createContact);

routes.put('/:id', validation.saveContact, contactsController.updateContact);

routes.delete('/:id', contactsController.deleteContact);

module.exports = routes;