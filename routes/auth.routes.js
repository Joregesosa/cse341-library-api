const { isAuthenticated } = require('../middlewares/auth.middleware');
const authRoutes = require('express').Router();
const {
  show,
  update,
  githubLogin,
  githubCallback,
  logout,
} = require('../controllers/auth.controller');
const { validateUserUpdate } = require('../validators/auth.schema');

authRoutes.get(
  '/github/login',
  githubLogin /* 
  #swagger.tags = ['Auth']
    #swagger.summary = 'Redirect to GitHub for authentication'
    #swagger.description = "Initiates GitHub OAuth authentication process. It can't be tested directly in Swagger UI, but you can use Postman or a browser to test it."
    #swagger.deprecated = true
    */,
);
authRoutes.get('/github/callback', githubCallback /* #swagger.ignore = true */);
authRoutes.get('/github/logout', isAuthenticated, logout);

authRoutes.get('/profile', isAuthenticated, show);
authRoutes.put('/profile', isAuthenticated, validateUserUpdate, update);

module.exports = authRoutes;
