const Joi = require('joi');

const userCreateSchema = Joi.object({
  firstName: Joi.string().min(2).max(50).required(),
  lastName: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).max(15).required(),
  address: Joi.string().min(5).max(100).required(),
  dateOfBirth: Joi.date().required(),
  password: Joi.string().min(6).required(),
});

const userUpdateSchema = Joi.object({
  firstName: Joi.string().min(2).max(50),
  lastName: Joi.string().min(2).max(50),
  email: Joi.string().email(),
  phone: Joi.string().min(10).max(15),
  address: Joi.string().min(5).max(100),
  dateOfBirth: Joi.date(),
  password: Joi.string().min(6),
}).min(1);

const validateUser = (req, res, next) => {
  const { error } = userCreateSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const validateUserUpdate = (req, res, next) => {
  const { error } = userUpdateSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = {
  validateUser,
  validateUserUpdate,
};
