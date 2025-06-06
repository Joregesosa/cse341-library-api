const joi = require('joi');

const bookCreateSchema = joi.object({
  title: joi.string().min(3).max(100).required(),
  author: joi.string().min(3).max(100).required(),
  coverUrl: joi.string().uri().optional(),
  description: joi.string().max(500).optional(),
  publishedYear: joi
    .number()
    .integer()
    .min(1900)
    .max(new Date().getFullYear())
    .required(),
  createdAt: joi.date().default(Date.now),
  updatedAt: joi.date().default(Date.now),
});

const bookUpdateSchema = joi
  .object({
    title: joi.string().min(3).max(100).required(),
    author: joi.string().min(3).max(100).required(),
    coverUrl: joi.string().uri().optional(),
    description: joi.string().max(500).optional(),
    publishedYear: joi
      .number()
      .integer()
      .min(1900)
      .max(new Date().getFullYear())
      .required(),
    createdAt: joi.date().default(Date.now),
    updatedAt: joi.date().default(Date.now),
  })
  .min(1);

const validateBook = (req, res, next) => {
  const { error } = bookCreateSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const validateBookUpdate = (req, res, next) => {
  const { error } = bookUpdateSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = {
  validateBook,
  validateBookUpdate,
};
