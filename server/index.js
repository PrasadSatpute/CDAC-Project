const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db')

const app = express()

app.get("/",(req, res) => {
  res.send("Hello World");
})


app.listen(3001, '0.0.0.0', () => {
  console.log('server started on port 3001')
})
