const ArticlesController = require('./controllers/articles.controller');
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');

exports.routesConfig = function (app) {
    app.post('/articles', [
        ValidationMiddleware.validAccess,
        ArticlesController.createArticle
    ]);
    app.get('/articles', [
        ValidationMiddleware.validAccess,
        ArticlesController.getArticles
    ]);
    app.get('/articles/:id', [
        ValidationMiddleware.validAccess,
        ArticlesController.getArticleById
    ]);
    app.get('/articles/user/:email', [
        ValidationMiddleware.validAccess,
        ArticlesController.getArticlesByUser
    ]);
    app.patch('/articles/:id', [
        ValidationMiddleware.validAccess,
        ArticlesController.editArticle
    ]);
    app.delete('/articles/:id', [
        ValidationMiddleware.validAccess,
        ArticlesController.deleteArticle
    ]);
};