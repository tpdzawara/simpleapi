if (process.env.NODE_ENV === 'production') {
    module.exports = {mongoURI: '**** online database URI to be placed here ****'}
} else {
    module.exports = {mongoURI: 'mongodb://localhost:27017/TrustMeSecurity'}
}
