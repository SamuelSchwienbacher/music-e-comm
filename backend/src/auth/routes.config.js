const AuthorizationController = require('./controllers/auth.controller');
const VerifyUserMiddleware = require('./middlewares/verify.user.middleware');
const AuthValidationMiddleware = require('../common/middlewares/auth.validation.middleware');

exports.routesConfig = function (app) {

    app.post('/login', [
        VerifyUserMiddleware.hasAuthValidFields,
        VerifyUserMiddleware.isPasswordAndUserMatch,
        AuthorizationController.login
    ]);

    app.post('/refresh', [
        AuthValidationMiddleware.verifyRefreshBodyField,
        AuthValidationMiddleware.validRefresh,
        AuthorizationController.refresh_token
    ]);
}; 