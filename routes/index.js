const express = require('express');
const routes = express.Router();

const authRoutes = require('./v1/auth.routes');
const postRoutes = require('./v1/post.routes');

routes.use(
  '/v1',
  authRoutes,
  postRoutes
);

module.exports = routes;
