const express = require('express');
const routes = express.Router();
const app = express();

routes.use('/', require('./swagger'));
routes.use('/contacts', require('./contacts'));

//app.use('/', routes);

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