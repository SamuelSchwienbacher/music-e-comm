const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit:4,
    host: "data",
    user: "root",
    password: "secret",
    database: "musicecomm"
});

function connect() {
    pool.getConnection((err,connection) => {
        if (err) {
            console.log(err);
            setTimeout(connect, 5000);
        } else {
            console.log("Connected");
            connection.release();
        }
    });
}

connect();

exports.pool = pool;