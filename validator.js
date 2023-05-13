//const { body, validationResult } = require('express-validator')
//const userValidationRules = () => {
 // return [
    // username must be an email
 //   body('username').isEmail(),
    // password must be at least 5 chars long
 //   body('password').isLength({ min: 5 }),
 // ]
//}

const { body, validationResult } = require('express-validator')
const userValidationRules = () => {
  return [
    // username must be an email
   // body('username').isEmail(),
    // password must be at least 5 chars long
   // body('password').isLength({ min: 5 }),
    body('flowerName').isString(),
    body('family').isString(),
    body('img').isString(),
    body('desc').isString(),
    body('location').isString(),
    body('zone').isString(),
    body('droughtTolerant').isString(),
    body('bloomTime').isString(),
    body('exposure').isString(),
    body('zipcode').isInteger(),
    body('type').isString(),
  
  ]
}


const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  userValidationRules,
  validate,
}