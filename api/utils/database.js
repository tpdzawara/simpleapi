if (process.env.NODE_ENV === 'production') {
    module.exports = {mongoURI: 'mongodb+srv://TrustMeSecurity:thenewbaby@cluster0-jg7sc.mongodb.net/TrustMeSecurity?retryWrites=true&w=majority'}
} else {
    module.exports = {mongoURI: 'mongodb://localhost:27017/TrustMeSecurity'}
}
