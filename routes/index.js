const express = require('express');
const routes = express.Router();
//const app = express();
//app.use('/', routes);
routes.use('/', require('./swagger'));
//routes.use('/contacts', require('./contacts'));
//routes.use('/templess', require('./temples'));
routes.use('/flowers', require('./flowers'));
//routes.use('/validator', require('./validator') )
routes.use('gardenerContacts', require('./gardenerContacts'))

routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://swain341-test.onrender.com/api-docs',
    };
    res.send(docData);
  })
); 

module.exports = routes;