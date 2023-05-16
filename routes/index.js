const express = require('express');
const routes = express.Router();
const passport = require("passport");

routes.use('/', require('./swagger'));

//routes.use('/contacts', require('./contacts'));
//routes.use('temples', require('./temples'));  ***** problem child
//routes.use('/user', require('./user'));
//routes.use('/flowers', require('./flowers'));
//routes.use('/contacts', require('./gardenerContacts'));


routes.get('/login', passport.Authenticator('github'), (req, res) => {});

routes.get('logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err);}
    });
});

module.exports = routes;