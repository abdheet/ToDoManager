const express = require('express')
const { db } = require('./db')
const todoRoute = require('./routes/todos')
const noteRoute = require('./routes/notes')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/Assets', express.static(__dirname + 'Assets'))
var distDir = __dirname + "/public/";
app.use(express.static(distDir));

app.use('/todos',todoRoute)
app.use('/notes',noteRoute)



db.sync()
  .then(() => {
    app.listen(process.env.PORT || 3333)
  })
  .catch((err) => {
    console.error(err)
  })