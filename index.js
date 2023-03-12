const connectToMongo = require('./db');

connectToMongo();

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! i am gaensh in learing stage')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})