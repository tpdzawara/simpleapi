const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        //Extract Authorization
        const token = req.headers["auth-token"];
        const decode = jwt.verify(token, 'mysecretkey');
    } catch (error) {
       res.status(500).json({
           error: error
       }); 
    }
}

module.exports = authenticate;