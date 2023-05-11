const express = require('express');
const routes = express.Router();
const validation = require('../middleware/validate')

const contactsController = require('../controllers/gardenerContacts');

//routes.get('/', contactsController.getData);

//#Garden-Contacts
routes.get('/', contactsController.getAll);

//#Garden-Contacts
routes.get('contacts:id', contactsController.getSingle);

//#Garden-Contacts
routes.post('/', validation.saveContact, contactsController.createContact);

//#Garden-Contacts
routes.put('/:id', contactsController.updateContact);

//#Garden-Contacts
routes.delete('/:id', contactsController.deleteContact);

module.exports = routes;