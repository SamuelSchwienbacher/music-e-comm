const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "data",
    user: "dev",
    password: "s5cr5t",
    database: "musicecomm"
});

function connect() {
    connection.connect(err => {
        if (err) {
            console.log(err);
            setTimeout(connect, 5000);
        } else {
            console.log("Connected");
        }
    });
}

connect();

exports.mysql = mysql;