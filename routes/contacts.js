const routes = require('express').Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

const contactsController = require('../controllers/contacts');

routes.get('/', contactsController.getAll);

routes.get('contacts:id', contactsController.getSingle);

routes.post('/', contactsController.createContact);

routes.put('/:id', contactsController.updateContact);

routes.delete('/:id', contactsController.deleteContact);

module.exports = routes;


