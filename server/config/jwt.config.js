// Json Web Token or JWT. npm i jsonwebtoken
const jwt = require("jsonwebtoken");

// Secret Key dotenv https://www.npmjs.com/package/dotenv
require('dotenv').config();
const myFirstSecret = process.env.FIRST_SECRET_KEY;



const payload = {
    id: user._id
};
// using the SECRET_KEY from our .env file
const userToken = jwt.sign(payload, process.env.SECRET_KEY);

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
    if (err) { 
    res.status(401).json({verified: false});
    } else {
    next();
    }
});
}