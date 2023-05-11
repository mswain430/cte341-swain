const express = require("express");
const routes = require('express').Router();
var app = express();
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
// const export =: Router
import * as express from 'express';
import { query } from 'express-validator';
const app = express();

/* app.set("port", process.env.PORT || 3000);
app.get("/", getData);

function getData(req, res) {
    console.log("getting data");
    res.write("{\"name\":\"Millie\"}");
    res.end();
} 

app.listen(app.get("port"), () => console.log("server is listening on port " + app.get("port")));
*/
const port = process.env.PORT || 8080;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.get('/hello', query('person').notEmpty(), (req, res) => {
  res.send(`Hello, ${req.query.person}!`);
});

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes').default);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});

module.exports = routes; 