const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json('application/json'));
app.use(cors({credentials: true, origin: true}));

app.post('/calcAdd', function (req, res) {
  var a = parseInt(req.body.a);
  var b = parseInt(req.body.b);
  var c = a + b;
  var outData = {
    'a': a,
    'b': b,
    'c': c
  };
  res.send(outData);
});

app.get('/', function (req, res) {
  res.send('Wazzup from node server.');
});

app.get('/testConn', (req, res) => {
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "P@ssw0rd"
  });

  con.connect(function(err) {
    if (err) {
      res.send(err);
    }
    res.send("Connected!");
  });
});

const server = app.listen(8081, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Server listening at http://%s:%s", host, port);
});
