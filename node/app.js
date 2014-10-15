var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'leap',
  password : 'motion2014!!',
  database : 'leap_integration'
});

connection.connect();

app.get('/api/all', function (req, res) {
  connection.query('SELECT * FROM emails', function(err, rows, fields) 
  {
    if (err)
    {
      throw err;
    }
    
    
    var list = [];
    for (var i = 0; i < rows.length; i++)
    {
      list.push(rows[i]);
    }
    
    res.send(list);
  });
});

app.get('/api/next', function (req, res) {
  res.send('You get the next email!');
});

app.get('/api/last', function (req, res) {
  res.send('You get the last email!');
});

app.delete('/api/delete/:id', function (req, res) {
  res.send('Deleted email #' + req.params.id);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening: http://%s:%s', host, port);
})