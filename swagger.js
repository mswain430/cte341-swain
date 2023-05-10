const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    //title: 'Contacts API',
    //description: 'Contacts API',
    title: 'Millies Backyard Flowers',
    description: 'Flowers API'
  },
  host: 'localhost:8080', //'swain341-test.onrender.com',  //https://swain341-test.onrender.com
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
 //swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//await import('./index.js');
 //}); 