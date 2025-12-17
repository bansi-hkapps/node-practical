const express = require('express');
const routes = express.Router();
const userController = require('../../controllers/UserController');
const auth = require('../../middleware/auth.middleware');

routes.post('/auth/register', userController.register);
routes.post('/auth/login', userController.login);
routes.get('/auth/profile', auth, userController.profile);

module.exports = routes;