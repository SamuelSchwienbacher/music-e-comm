const pool = require('../../common/services/mysql.service').pool;


exports.createUser = (user) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO users (username, password) VALUES (?, ?);`, [user.email, user.password], (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.addArticles = (articles, email) => {
    console.log(articles[0]);
    console.log(email);
    let promises = [];
    for (const a of articles) {
        console.log(a);
        promises.push(new Promise((resolve, reject) => {
            pool.query(`INSERT INTO library (username, article_id) VALUES (?, ?)`, [email, a], (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        }));
    }
    return Promise.all(promises);
}

exports.get = (email) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM users WHERE username=?;`, [email], (err, data) => {
            if (err)
                reject(err);
            resolve(data);
        });
    });
}