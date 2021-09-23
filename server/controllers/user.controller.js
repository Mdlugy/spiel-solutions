const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../config/jwt.config");

class UserController {
    register(req, res) {
        const user = new User(req.body);
        user.save()
            .then(() => {
                res
                    .cookie("usertoken", jwt.sign({_id:user._id}, secret, {httpOnly: true}))
                    .json({msg: "Success!", user: user})
            })
            .catch(err => res.json(err))
    }

    login (req, res) {
        User.findOne({email:req.body.email})
            .then(user => {
                if (user == null) {
                    res.json({msg:"Invalid login attempt"}) // email is not found
                }
                else {
                    bcrypt.compare(req.body.password, user.password)
                        .then(passwordIsValid => {
                            if(passwordIsValid) {
                                res.cookie("usertoken", jwt.sign({_id: user._id}, secret), {httpOnly:true})
                                    .json({msg: "logged in!"})
                            }
                            else {
                                res.json({msg: "Invalid login attempt"}) // incorrect password
                            }
                        })
                        .catch(err => res.json({msg: "Invalid login attempt", err}))
                }
            })
            .catch(err => res.json(err))
    }
}

module.exports = new UserController();
