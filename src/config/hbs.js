const expressHbs = require('express-handlebars')

const hbs = expressHbs.create({
  defaultLayout: 'layout',
  extname: '.hbs',
  helpers: {
    setCSS: () => {
      if (process.env.stage === 'dev') {
          return "/static/frr.css"
      } else {
          return "https://frr-static-resources.s3-ap-southeast-2.amazonaws.com/frr.css"
      }
  }
  }
});

module.exports = hbs