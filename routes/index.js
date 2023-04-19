const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Rhoda Ready');
});

module.exports = routes;