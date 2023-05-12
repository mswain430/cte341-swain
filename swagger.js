const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: "Garden Club API",
    description: "Garden Club API",
    title: "Millies Backyard Flowers",
    description: "Garden Club Flowers API"
  },
  host: "swain341-test.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
 //swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//await import('./index.js');
 //}); 