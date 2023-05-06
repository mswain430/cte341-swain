const express = require('express');
const app = express();

//app.get('/', (req, res) => {
//    res.send('Emily Birch');
//});

//app.get('/hannah', (req, res) => {
 //   res.send('Hannah Birch')
//});

const port = 3000;

app.listen(process.env.port || port);
console.log(`Web Server is listening on ${port}`)

const emilyRoute = (req, res) => {
    res.send('Emily Birch');
};

const hannahRoute = (req, res) => {
    res.send('Hannah Birch');
};

module.exports = {
    emilyRoute,
    hannahRoute
}