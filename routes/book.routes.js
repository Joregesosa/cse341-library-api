const {
  index,
  show,
  create,
  update,
  destroy,
} = require('../controllers/book.controller');
const {
  validateBook,
  validateBookUpdate,
} = require('../validators/book.schema');
const bookRoutes = require('express').Router();

bookRoutes.get('/', index);
bookRoutes.get('/:id', show);
bookRoutes.post('/', validateBook, create);
bookRoutes.put('/:id', validateBookUpdate, update);
bookRoutes.delete('/:id', destroy);

module.exports = bookRoutes;
