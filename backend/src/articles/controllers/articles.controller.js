const ArticlesModel = require('../models/articles.model');

exports.createArticle = (req, res) => {
    try {
        //set all value right (fe. image BLOB)
        ArticlesModel.createArticle(req.body).then(result => {
            res.status(200).send(result);
        });
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
}

exports.getArticles = (req, res) => {
    try {
        ArticlesModel.getArticles().then(result => {
            res.status(200).send(result);
        });
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
}

exports.getArticleById = (req, res) => {
    try {
        ArticlesModel.getArticleById(req.params.id).then(result => {
            res.status(200).send(result);
        });
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
}

exports.getArticlesByUser = (req, res) => {
    try {
        ArticlesModel.getArticlesByUser(req.params.email).then(result => {
            res.status(200).send(result);
        });
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
}

exports.editArticle = (req, res) => {
    try {
        ArticlesModel.editArticle(req.body, req.params.id).then(result => {
            res.status(200).send(result);
        });
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
}

exports.deleteArticle = (req, res) => {
    try {
        ArticlesModel.deleteArticle(req.params.id).then(result => {
            res.status(200).send(result);
        });
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
}