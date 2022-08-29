const http = require('http');
const { syncBuiltinESMExports } = require('module');
const mysql = require('mysql');

const con = mysql.createConnection({
  host: "data",
  user: "root",
  password: "secret",
  database: "musicecomm"
});

function connect() {
  con.connect(function(err) {
    if (err) {
      console.log("Connection Error, trying again...");
      console.log(err);
      setTimeout(connect, 10000);
    } else {
      console.log("Connected!");
    };
  });
}
connect();

const hostname = 'backend';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  con.query("SELECT * FROM test", function (err, result) {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.end("error");
    } else {
      console.log(result);
      res.end(result[0].test);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});