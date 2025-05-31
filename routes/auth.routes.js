const {
  index,
  show,
  create,
  update,
  destroy,
} = require('../controllers/auth.controller');
const {
  validateUser,
  validateUserUpdate,
} = require('../validators/auth.schema');
const authRoutes = require('express').Router();

authRoutes.get('/', index);
authRoutes.get('/:id', show);
authRoutes.post('/', validateUser, create);
authRoutes.put('/:id', validateUserUpdate, update);
authRoutes.delete('/:id', destroy);

module.exports = authRoutes;
