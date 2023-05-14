const routes = require("express").Router();

const getCoursesController = require("../controllers/courses");

const { isAuthenticated } = require("../middleware/authenticate");

routes.get("/", getCoursesController.getAllCourses);
routes.get("/:id", getCoursesController.getCourse);
routes.post("/", isAuthenticated, getCoursesController.postCourse);
routes.put("/:id", isAuthenticated, getCoursesController.deleteCourse);

module.exports = routes;