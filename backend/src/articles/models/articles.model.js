const pool = require('../../common/services/mysql.service');

//TODO path is not set by the user
//TODO implement file upload and set path to file path afte upload
exports.createArticle = (article) => {
    pool.query(`INSERT INTO articles (type, cover, name, description, price, sample, path) 
                VALUES (${article.type}, ${article.cover}, ${article.name}, ${article.description}, 
                        ${article.price}, ${article.sample}, ${article.path});`, (err, data) => {
        if (err)
            throw err;
        return data;
    });
}

exports.getArticles = () => {
    pool.query(`SELECT * FROM articles;`, (err, data) => {
        if (err)
            throw err;
        return data;
    });
}

exports.getArticleById = (id) => {
    pool.query(`SELECT * FROM articles WHERE id=${id};`, (err, data) => {
        if (err)
            throw err;
        return data;
    });
}

exports.getArticlesByUser = (email) => {
    pool.query(`SELECT * FROM articles WHERE id IN (SELECT article_id FROM library WHERE unsername=${email} );`, (err, data) => {
        if (err)
            throw err;
        return data;
    });
}

//TODO path should not be edited
exports.editArticle = (article, id) => {
    pool.query(`UPDATE articles 
                SET type = ${article.type}, cover = ${article.cover}, name = ${article.name}, description = ${article.description},
                    price = ${article.price}, sample  = ${article.sample}, path  = ${article.path}
                WHERE id=${id};`, (err, data) => {
        if (err)
            throw err;
        return data;
    });
}

exports.deleteArticle = (id) => {
    pool.query(`DELETE FROM articles WHERE id=${id};`, (err, data) => {
        if (err)
            throw err;
        return data;
    });
}