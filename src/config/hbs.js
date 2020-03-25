const expressHbs = require('express-handlebars')
const prismicDom = require('prismic-dom')

const setCSS = () => {
    if (process.env.stage === 'dev') {
        return "http://localhost:3000/static/style.css"
    } else {
        return "https://atypical-static-resources.s3-ap-southeast-2.amazonaws.com/style.css"
    }
}

const prismicRichText = (text) => {
    const string = prismicDom.RichText.asHtml(text)
    return string
}

const prismicImageHandler = (url) => {
    const string = `${url}&fit=crop&w=600&h=300`
    return string
}

const hbs = expressHbs.create({
  defaultLayout: 'layout',
  extname: '.hbs',
  helpers: {
    setCSS,
    prismicRichText,
    prismicImageHandler
  }
});

module.exports = hbs