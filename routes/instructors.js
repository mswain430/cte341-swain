const routes = require('express').Router();

const getInstructorController = require("../controllers/gardenerContacts");

//const auth = require('../middleware/authenticate.js);

routes.get("/", getInstructorController = require("../controllers/instructors");
routes.get("/:id", getInstructorController.getInstructor);
//routes.post("/", auth.isAuthenticated, validate.newInstructor.getInstructorsController.postInstructor);
//routes.put("/:id", auth.isAuthenticated, validate.newInstructor, getInstructorsController.putInstructor);
//routes.delete("/:id", getInstructorsController.deleteInstructor);

module.exports = routes;