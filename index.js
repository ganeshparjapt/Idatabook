const connectToMongo = require('./db');

connectToMongo();

const express = require('express')
const app = express()
const port = 3000

//Avable routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello World! i am gaensh in learing stage')
})



app.listen(port, () => {
  console.log(` listening on port http://localhost:${port}`)
})