const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const professionalRoutes = require('./routes/professional')
const contactsRoutes = require('./routes/contacts')
const port = process.env.PORT || 8080;
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// let bodyParser = require('body-parser');
app.use('/', bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
   // req = console.log (`getting headers`);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-Key');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  });
  

app.use(cors({ methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']}));
app.use(cors({
  origin: '*'
  })); 

//app.use('contacts', require('./routes').default);
//app.get('/', contactsController.contactsRoute);
app.use('/professional', professionalRoutes);
app.use('contacts', contactsRoutes);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
