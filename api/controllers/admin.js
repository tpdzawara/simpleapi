const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const  Admin  = require('../models/Admin');

//Get all admin registered
exports.getAllAdmin = (req, res, next) => {

    Admin.find({})
    .exec()
    .then( doc => {
        res.status(201).json({
            message: 'no Adminstrator registered yet'
        });
    })
    .catch(er => {
        res.status(500).json({
            error: er
        })
    });
}

//Create Admin Account
exports.createNewAdmin = (req, res, next) => {

    Admin.find({ email: req.body.email })
    .exec()
    .then(user => {
        if( user.length > 0) {
            return res.status(500).json({
                message: 'Already registered, try another email address'
            });
        } else {
            bcrypt.hash(req.body.password, 10, function(err, hash) {
                //Store hash in your password DB.
                if(err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    const admin = new Admin({
                        _id: new mongoose.Types.ObjectId(),
                        fullName: req.body.fullName,
                        email: req.body.email,
                        password: hash
                    });
                    admin.save()
                    .then(doc => {
                        res.status(201).json({
                            message:'Admin registered Succefully'
                        });
                    })
                    .catch( er => {
                        res.status(500).json({
                            error: er
                        });
                    });
                }
            });
        }
    });
}

//Login Admin
exports.loginAdmin = (req, res, next) => {
    Admin.find({ email: req.body.email })
    .exec()
    .then(user => {
        if(user.length <= 0) {
            return res.status(500).json({
                message: 'Something went wrong'
            });
        } else {
            bycrpt.compare(req.body.password, user[0], (err, result) =>{
                console.log('err', err);
                console.log('result', result);
                
                if(err) {
                    return res.status(500).json({
                        error: 'Login Failed'
                    });
                } else {
                    if (result) {
                        
                        //Create token
                        const payload = {
                            userId: user[0]._id,
                            iat:  Math.floor(Date.now() / 1000) - 30,
                            exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        }
                        jwt.sign(payload, 'mysecretkey', (err, token) => {
                            if(err) {
                                return res.status(200).json({
                                    error: 'err'
                                });
                            } else {
                                res.status(200).json({
                                    message: 'Login Succefully',
                                    token: token
                                });
                            }
                        });
                    } else {
                        res.status(200).json({
                            message: 'Login Failed'
                        });
                    }
                }
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    })
}