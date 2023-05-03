var express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
//const MongoClient = require('mongodb').MongoClient;
const routes = require('./routes');

const port = process.env.PORT || 8080
var app = express();

app
.use(bodyParser.json())
.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
.use('/professional', routes);

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`)
    }
});

