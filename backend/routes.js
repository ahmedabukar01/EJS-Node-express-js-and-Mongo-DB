const express = require('express');
const routes = express.Router();
const blogController = require('./controllers');
// blog posts
routes.get('/', blogController.get_blogs);
routes.get('/create',blogController.create_blog);
// routes.post('/',blogController.create_post_blog);
routes.get('/:id',blogController.details);

module.exports = routes;