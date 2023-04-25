const routes = require('express').Router();
//const jokes = require('../controllers');

routes.get('/', (req, res) => {
    res.send('Rhoda Ready');
});

// routes.get('/', jokes.displayJoke);

module.exports = routes;