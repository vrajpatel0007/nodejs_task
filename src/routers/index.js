const express = require('express');
const routes = express.Router();

const User = require('./user.route')
const Post = require('./post.route')

routes.use('/user', User);
routes.use('/post', Post);
module.exports = routes;