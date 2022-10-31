const pool = require('../../common/services/mysql.service').pool;

//TODO path is not set by the user
//TODO implement file upload and set path to file path after upload
exports.createArticle = (article) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO articles (type, cover, name, description, price, sample, path) 
                VALUES (?, ?, ?, ?, ?, ?, ?);`, [article.type, article.cover, article.name,
                        article.description, article.price, article.sample, article.path], (err, data) => {
            if (err)
                reject(err);
            resolve(data);
        });
    });
}

exports.getArticles = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM articles;`, (err, data) => {
            if (err)
                reject(err);
            resolve(data);
        });
    });
}

exports.getArticleById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM articles WHERE id=?;`, [id], (err, data) => {
            if (err)
                reject(err);
            resolve(data);
        });
    });
}

exports.getArticlesByUser = (email) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM articles WHERE id IN (SELECT article_id FROM library WHERE username=? );`, [email], (err, data) => {
            if (err)
                reject(err);
            resolve(data);
        });
    });
}

//TODO path should not be edited
exports.editArticle = (article, id) => {
    return new Promise((resolve, reject) => {
        this.getArticleById(id).then(result => {
            const ogarticle = result[0];
            pool.query(`UPDATE articles 
                    SET type = ?, cover = ?, name = ?, description = ?,
                        price = ?, sample  = ?
                    WHERE id=?;`, [article.type ? article.type : ogarticle.type, article.cover ? article.cover : ogarticle.cover, 
                        article.name ? article.name : ogarticle.name, article.description ? article.description : ogarticle.description, 
                        article.price ? article.price : ogarticle.price, article.sample ? article.sample : ogarticle.sample, id],
                     (err, data) => {
                        if (err)
                            reject(err);
                        resolve(data);
                    });
        });
    });
}

exports.deleteArticle = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM articles WHERE id=?;`, [id], (err, data) => {
            if (err)
                reject(err);
            resolve(data);
        });
    })
}