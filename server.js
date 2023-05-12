const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
//const professionalRoutes = require('./routes/professional');
//const contactsRoutes = require('./routes/contacts');
//const contactsRoutes = require('./routes/gardenerContacts');

const port = process.env.PORT || 8080;
const app = express();
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');



app
  //.use('contacts', require('./routes').default);
  //.get('/contacts', contactsRoutes);
  //.use('/professional', professionalRoutes);
  //.use('/gardenerContacts', require('./gardenderContacts'))
  //.get('/gardenerContacts', contactsRoutes)
  .use('/', require('./routes'))

  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use('/', bodyParser.json()) 
  .use(bodyParser.urlencoded({ extended: false }))
  .use((req, res, next) => {
   // req = console.log (`getting headers`);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-Key');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next()
  })
  app.use(cors({ methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']}))
  app.use(cors({ 
    origin: '*'
    }))
    
 process.on('uncaughtException', (err, origin) => {
  console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`)
 }); 

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
