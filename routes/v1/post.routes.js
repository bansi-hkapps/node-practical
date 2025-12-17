const express = require('express');
const routes = express.Router();
const postController = require('../../controllers/PostController');
const auth = require('../../middleware/auth.middleware');

routes.post('/posts', auth, postController.createPost);
routes.get('/posts', postController.getPosts);
routes.post('/posts/:id/like', auth, postController.likePost);
routes.get('/posts/user/:userId', postController.getUserPosts);

module.exports = routes;
