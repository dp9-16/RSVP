const express = require("express");
const path = require("path");
const pool = require("./db/db.js");
require("dotenv").config(path.join(__dirname+'../.env'));

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/test', (req, res) => {
  console.log(process.env.DB_Host)
  res.json(process.env.DB_Host)
})

app.get('/register', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log('error')
      res.status(400).send(err);
    } else {
      connection.query('SELECT * FROM Guests', (error, data, fields) => {
        if (!error) {
          res.send(data);
        }
        connection.release();
      })
    }
  })
})

app.post('/testing', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log('error');
     res.send(err);
    }
    connection.query(`INSERT INTO Guests (name, registered, email, plusOne) VALUES ('${req.query.name}','${req.query.registered}','${req.query.email}','${req.query.plusOne}')`, (err, data, fields) => {
      if (err) {
        res.status(400).send(err);
      }
      res.status(200).send(data)
    })
    connection.release();
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.log(`Listening at http://${process.env.DB_Host}:${PORT}`)