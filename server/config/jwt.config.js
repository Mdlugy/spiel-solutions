// Json Web Token or JWT. npm i jsonwebtoken
const jwt = require("jsonwebtoken");

// Secret Key dotenv https://www.npmjs.com/package/dotenv
// require('dotenv').config();
const secret = "secrets are included"
module.exports.secret = secret;




module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.signedCookies.usertoken, secret, (err, payload) => {
        console.log(res => console.log(res))
        if (err) { 
            res.status(401).json({verified: false});
        } else {
            next();
        }
    });
}