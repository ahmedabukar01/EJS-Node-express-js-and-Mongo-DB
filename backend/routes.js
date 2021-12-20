const express = require('express');
const routes = express.Router();
const blogController = require('./controllers');
// blog posts
routes.get('/', blogController.get_blogs);

module.exports = routes;