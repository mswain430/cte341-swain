const express = require('express');
const routes = express.Router();

routes.use('/', require('./swagger'))
//routes.use('/contacts', require('./contacts'));
//routes.use('temples', require('./temples'));  ***** problem child
routes.use('/flowers', require('./flowers'));
routes.use('/contacts', require('./gardenerContacts'))

 //routes.use(
 // '/',
 // (docData = (req, res) => {
 //   let docData = {
 //     documentationURL: 'https://swain341-test.onrender.com/api-docs',
 //   };
 //   res.send(docData);
 // })
//); 

module.exports = routes;