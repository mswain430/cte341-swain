const express = require('express');
const router = express.Router();
const contact = require('contacts')
router.use('/contacts', require('./contacts'))

routes.use('/contacts', contact);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://nathanbirch.github.io/nathan-byui-api-docs',
    };
    res.send(docData);
  })
);

module.exports = router;