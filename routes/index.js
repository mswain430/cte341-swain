const express = require('express');
const routes = express.Router();
const app = express();
//const contact = require('contacts');
//const contactsController = require('../controllers/contacts')
//router.use('/', require('./swagger'));
routes.use('/', require('../controllers/contacts'));

routes.get('/home', (req,res) => {
  res.send('Hello World, This is home router');
});

routes.get('/profile', (req,res) => {
  res.send('Hello World, This is profile router');
});

routes.get('/login', (req,res) => {
  res.send('Hello World, This is login router');
});

routes.get('/logout', (req,res) => {
  res.send('Hello World, This is logout router');
});

app.use('/', routes);
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