const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: "Garden Club API",
    description: "Garden Club API",
    title: "Millies Backyard Flowers",
    description: "Garden Club Flowers API"
  },
  host: "localhost:8080",
  basePath: "/",
  schemes: ["https"],
  tags: [
    {
      "name": "flowers",
      "description": "Showcase your backyard flowers"
    },
    {
      "name": "Contacts",
      "description": "Garden Club Memberships"
    },
    
  ],
  paths: {
    "/flowers/": {
      get: {
        tags: ["flowers"],
        summary: "Add flower information",
        description: "Add to our backyard flower database",
        produces: ["application/json"],
        parameters: [
          {
            name: "flowerName",
            in: "path",
            description: "flowerName required",
            type: "string"
          }
        ],
        responses: {
          200: {
            description: "successful operation",
            schema: {
              type: "object"
            }
          },
          400: {
            description: "Invalid Flower value"
          }
        }
      }
    },

  }
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
 //swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//await import('./index.js');
 //}); 