const serverless = require('serverless-http');
const express = require('express')
const hbs = require('./src/config/hbs')

const app = express()
app.use('/static', express.static('public'))
app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.render('pages/home', {
    data: {
      env: process.env.NODE_ENV, 
      content: "foo"
    }
  })
})

module.exports.handler = serverless(app);