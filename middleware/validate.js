const validator = require('../helpers/validate');

const saveContact = (req, res, next) => {
const validationRule = {
   firstName: 'required|string',
   lastName: 'required|string',
   address: 'required|string',
   email: 'required|string',
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
      img: 'string',
      zone: 'required|string',
      bloomTime: 'required|string',
      exposure: 'required|string',
      zipcode: 'required|integer',
      type: 'required|string',
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