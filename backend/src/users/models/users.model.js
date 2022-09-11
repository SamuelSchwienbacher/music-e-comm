const pool = require('../../common/services/mysql.service');

exports.createUser = (user) => {
    pool.query(`INSERT INTO users (username, password) VALUES (${user.email}, ${user.password});`, (err, data) => {
        if (err)
            throw err;
        return data;
    });
};

exports.addArticles = async (articles, email) => {
    let data;
    for (const a in articles) {
        await pool.query(`INSERT INTO library (username, article_id) VALUES (${email}, ${a})`, (err, data) => {
            if (err)
                throw err;
            data = data;
        });
    }
    return data;
}

exports.get = (email) => {
    pool.query(`SELECT * FROM users WHERE username=${email};`, (err, data) => {
        if (err)
            throw err;
        return data;
    });
}