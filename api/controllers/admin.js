const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const  Admin  = require('../models/Admin');

//Get all admin registered
exports.getAllAdmin = async (req, res, next) => {

   try {
       const admin = await Admin.find();

       res
        .status(200)
        .json({ success: true, count: admin.length, data: admin });
   } catch (error) {
       next(error);
   }
}

//Create Admin Account
exports.createNewAdmin = function (req, res, next) {
 Admin.find({ email: req.body.email })
    .exec()
    .then(user => {
        if( user.length > 0) {
            return res.status(500).json({
                message: 'Already registered, try another email address'
            });
        } else {
            //Was getting an error here, the req object was not geting parsed...
            bcrypt.hash(req.body.password, 10, function(err, hash) {
                //Store hash in your password DB.
                if(err) {
                    return res.status(500).json({
                        error: err,
                        description: "Its a salting error"
                    });
                } else {
                    const admin = new Admin({
                        _id: new mongoose.Types.ObjectId(),
                        userName: req.body.userName,
                        email: req.body.email,
                        password: hash
                    });
                    admin.save()
                    .then(doc => {
                        res.status(201).json({
                            message:'Admin registered Succefully'
                        });
                    })
                    .catch( err => {
                        res.status(500).json({
                            error: err
                        });
                    });
                }
            });


            //
        }
    });
}

//Login Admin
exports.loginAdmin = (req, res, next) => {
    console.log(req.body);
    Admin.find({email: req.body.email})
    .exec()
    .then(user => {
        if(user.length <= 0){
            console.log("email not found...");
            return res.status(500).json({
                message: 'Something went wrong'
            });
        }else{
            // Load hash from your password DB.
            //const user = user[0];
            bcrypt.compare(req.body.password, user[0].password, function(err, result) {
                console.log('err', err);
                console.log('result', result);
                
                if(err){

                    return res.status(500).json({
                        error: 'Login Failed'
                    });
                }else{
                    if(result){

                        // Create token
                        const payload = {
                            userId: user[0]._id,
                            iat:  Math.floor(Date.now() / 1000) - 30,
                            exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        }
                        jwt.sign(payload, 'mysecretkey', function(err, token) {
                            
                            if(err){
                                return res.status(401).json({
                                    error: 'err'
                                });
                            }else{
                                res.status(200).json({
                                    message: 'Login Successfully',
                                    token: token
                                });
                            }
                            
                        });

                        
                    }else{
                        res.status(401).json({
                            message: 'Login Failed'
                        })
                    }
                }
                
                
            });
        }
    })
    .catch(er => {
        res.status(500).json({
            error: er
        });
    });

}