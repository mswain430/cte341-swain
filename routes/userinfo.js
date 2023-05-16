const express = require("express");

const userInfoController = require("../controllers/userInfo");
const isAuth = require("../middleware/authToken");

const routes = express.Router();

// GET INFO
// router.get("/", userInfoController.getInfo);
routes.get("/", isAuth, userInfoController.getInfo);
// localhost:8080/userInfo/

module.exports = routes;