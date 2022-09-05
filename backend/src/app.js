const express = require('express');
const app = express();

const AuthRouter = require('./auth/routes.config');
const UsersRouter = require('./users/routes.config');
const ArticlesRouter = require('./users/articles.config');