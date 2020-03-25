const Prismic = require('prismic-javascript')
const url = "https://atypical-web.cdn.prismic.io/api/v2"

// Prismic Query for the home page type

const homeData = async () => {
    const api = await Prismic.api(url)
    const response = await api.query(
        Prismic.Predicates.at('document.type', 'home_page')
    )
    return response.results[0].data
}

module.exports = homeData





