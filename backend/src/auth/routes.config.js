const AuthorizationController = require('./controllers/authorization.controller');

exports.routesConfig = function (app) {

    app.post('/login', [
        AuthorizationController.login
    ]);

    app.post('/login/refresh', [
        AuthorizationController.login
    ]);
};  