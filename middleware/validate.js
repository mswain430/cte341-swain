const validator = require('../helpers/validate');

const saveContact = (req, res, next) => {
const validationRule = {
   firstName: 'required|string',
   lastName: 'required|string',
   address: 'required|string',
   email: 'required|email',
   zipcode: 'required|integer',
   cellphone: 'required|integer'
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
      family: 'required|string',
      type: 'required|string',
      img: 'required|string',
      location: 'required|string',
      droughtTolerant: 'required|string',
      bloomTime: 'required|string',
      exposure: 'required|string',
      zipcode: 'required|integer'
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