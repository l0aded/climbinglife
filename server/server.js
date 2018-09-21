const express = require('express');
const path = require('path');
const parser = require('body-parser');
const db = require('../db/db.js');

const app = express();
const PORT = 3000;

app.use(parser.json());
app.use(express.static(path.join(__dirname, '../dist')))


//Router for Server

app.get('/submit/:url', (req, res) => {
  const url = req.params.url;
  // console.log('server get one list triggered ', req.params.listId)
  db.findOneList(url)
  .then((data) => {
    // console.log('get one list success data: ', data)
    res.send(data)
  })
})


app.listen(PORT, () => {
  console.log("Listening to port: ", PORT)
})
