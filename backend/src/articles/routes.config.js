const ArticlesController = require('./controllers/articles.controller');

//TODO: fill routes with controller calls
exports.routesConfig = function (app) {
    app.post('/articles', [

    ]);
    app.get('/articles', [
        
    ]);
    //Added single get for completeness
    app.get('/articles/:article_id', [
        
    ]);
    app.get('/articles/:user_id', [
        
    ]);
    app.get('/articles/:article_id/download', [
        
    ]);
    app.patch('/articles/:article_id', [
        
    ]);
    app.delete('/articles/:article_id', [
        
    ]);
};