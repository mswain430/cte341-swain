const validator = require('../helpers/validate');

const saveContact = (req, res, next) => {
const validationRule = {
   firstName: 'required|string',
   lastName: 'required|string',
   address: 'string',
   email: 'required|email',
   zipcode: 'required|number',
   cellphone: 'number'
 };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
     res.status(412).send({
       success: false,
       message: 'Validation failed',
       data: err
     });
   } else {
     next();
   }
  });
};

const saveFlower = (req, res, next) => {
    const validationRule = {
      flowerName: 'required|string',
      family: 'string',
      type: 'string',
      img: 'required|string',
      location: 'required|string',
      droughtTolerant: 'string',
      bloomTime: 'string',
      exposure: 'string',
      zipcode: 'int'
    };
    validator(req.body, validationRule, {}, (err, status) => {
      if (status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        next();
      }
    });
  };


module.exports = {
  saveContact,
  saveFlower
};