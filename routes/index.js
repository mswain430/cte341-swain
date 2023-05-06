const routes = require('express').Router();
//const contact = require('contacts');
//const contactsController = require('../controllers/contacts')
//router.use('/', require('./swagger'));
routes.use('/contacts', require('../controllers/contacts'));

/*
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://swain341-test.onrender.com/swain-byui-api-docs',
    };
    res.send(docData);
  })
); 
*/

module.exports = routes;