/* const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Running on port ${port}`)
}) */

const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const port = process.env.PORT || 8080;
const app = express();
const cors = require('cors');

app.use('/', require('./routes').default);

// let bodyParser = require('body-parser');
app.use('/', bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept, Z-Key')
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  });
  
  app.use(cors({ methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']}));
  app.use(cors({
  origin: '*'
  })); 
  
mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
