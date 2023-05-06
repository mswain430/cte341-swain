var express = require("express");
const routes = require('express').Router();
var app = express();

app.set("port", process.env.PORT || 3000);
app.get("/", getData);

function getData(req, res) {
    console.log("getting data");
    res.write("{\"name\":\"Millie\"}");
    res.end();
}

app.listen(app.get("port"), () => console.log("server is listening on port " + app.get("port")));

routes.use('/temples', temple);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://nathanbirch.github.io/nathan-byui-api-docs',
    };
    res.send(docData);
  })
);

module.exports = routes;