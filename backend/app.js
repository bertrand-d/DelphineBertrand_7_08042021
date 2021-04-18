const express = require('express');

const app = express();

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'elevage'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database MySQL!');
});


app.use((req, res) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
});

module.exports = app;