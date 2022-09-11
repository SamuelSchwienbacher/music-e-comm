const   UsersController = require('./controllers/users.controller'),
        ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');

exports.routesConfig = function (app) {
    app.post('/users', [
        UsersController.create
    ]);
    app.post('/users/articles/:email', [
        ValidationMiddleware.validAccess,
        UsersController.addarticles
    ]);
};