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

const prismicImageHandlerBody = (url) => {
    const string = `${url}&fit=crop&w=600&h=300`
    return string
}

const prismicImageHandlerCard = (url) => {
    const string = `${url}&fit=crop&w=600&h=250`
    return string
}

const oddRowInject = (val) => {
    if ((val+1) % 2 !== 0) {
        return `<div class="row">`
    }
}

const evenRowInjectClose = (val) => {
    if ((val+1) % 2 === 0) {
        return `</div>`
    }
}

const hbs = expressHbs.create({
  defaultLayout: 'layout',
  extname: '.hbs',
  helpers: {
    setCSS,
    prismicRichText,
    prismicImageHandlerBody,
    prismicImageHandlerCard,
    oddRowInject,
    evenRowInjectClose
  }
});

module.exports = hbs