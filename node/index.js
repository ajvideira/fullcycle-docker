const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
});

connection.query(`insert into people(name) values('Jonathan')`);
connection.end();

app.get('/', (req, res) => {
  res.send('<h1>Full Cycle!!</h1>');
});

app.listen(3000, () => {
  console.log('Rodando na porta 3000');
});
