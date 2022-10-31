const ArticlesModel = require('../models/articles.model');

exports.createArticle = (req, res) => {
    if (req.body) {
        ArticlesModel.createArticle(req.body).then(result => {
            res.status(200).send(result);
        }).catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
    } else {
        console.log('createArticle: Body is empty!');
        res.status(400).send('Body is empty!');
    }
}

exports.getArticles = (req, res) => {
    ArticlesModel.getArticles().then(result => {
        res.status(200).send(result);
    }).catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
}

exports.getArticleById = (req, res) => {
    if (req.params?.id) {
        ArticlesModel.getArticleById(req.params.id).then(result => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).send(err);
        });
    } else {
        console.log('getArticleById: No Id in params!');
        res.status(400).send('No Id in params!');
    }
}

exports.getArticlesByUser = (req, res) => {
    if (req.params?.email) {
        ArticlesModel.getArticlesByUser(req.params.email).then(result => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).send(err);
        });
    } else {
        console.log('getArticleByUser: No Email in params!');
        res.status(400).send('No Email in params!');
    }
}

exports.editArticle = (req, res) => {
        if (req.body) {
            if (req.params?.id) {
                ArticlesModel.editArticle(req.body, req.params.id).then(result => {
                    res.status(200).send(result);
                }).catch((err) => {
                    console.log(err);
                    res.status(500).send(err);
                });
            } else {
                console.log('editArticle: No Id in params!');
                res.status(400).send('No Id in params!');
            }
        } else {
            console.log('editArticle: Body is empty!');
            res.status(400).send('Body is empty!');
        }
}

exports.deleteArticle = (req, res) => {
    if (req.params?.id) {
        ArticlesModel.deleteArticle(req.params.id).then(result => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).send(err);
        });
    } else {
        console.log('deleteArticle: No Id in params!');
        res.status(400).send('No Id in params!');
    }
}