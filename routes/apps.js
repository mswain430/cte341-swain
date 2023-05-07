var express = require('express');
var routes = express.Router();

/* GET home page. */
routes.get('/', function(req, res, next) {
  res.redirect('/api-docs')
});

module.exports = routes;