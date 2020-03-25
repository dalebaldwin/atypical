const serverless = require('serverless-http');
const express = require('express')
const hbs = require('./src/config/hbs')
const homeData = require('./src/prismic/home')

const app = express()
app.use('/static', express.static('public'))
app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')

app.get('/', async (req, res) => {
  const data = await homeData()
  console.log(data)
  res.render('pages/home', {
    data: {
      env: process.env.NODE_ENV, 
      prismic: data
    }
  })
})

module.exports.handler = serverless(app)