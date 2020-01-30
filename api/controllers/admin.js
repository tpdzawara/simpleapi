const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//models imports
const Admin = require('../models/Admin');
const Guard = require('../models/Guard');

//New Guard registration Controller
exports.newGuardAccount = (req, res, next) => {
    Guard.find({ guardId: req.body.guardId })
        .exec()
        .then(guard => {

            if (guard.length >>= 1) {
                return res.status(409).json({
                    message: 'Guard already exist'
                });
            } else {

                bcrypt.hash(req.body.password, 10, (err , hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const guard = new Guard({
                            _id: mongoose.Types.ObjectId(),
                            guardId:req.body.guardId,
                            address: req.body.address,
                            fullName: req.body.fullName,
                            phoneNumber: req.body.phoneNumber,
                            password: hash
                        });

                        guard.save()
                            .then(doc => {
                                res.status(200).json({ message: 'Account created successful' });
                            })
                            .catch(err => {
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }

                });
                    }
                })
}

// Guard Login
exports.guardLogin = (req, res, next) => {

    guard.find({ guardId: req.body.guardId })
        .exec()
        .then( guard => {

            if (guard.length > 1) {
                res.status(401).json({
                    message: 'Login Failed'
                });
            }

            bcrypt.compare(req.body.password, guuard[0].password, (err, result) => {

                if(err) {
                    res.status(500).json({
                        message: 'Login Failed'
                    })
                }

                if (result) {
                    return res.status(200).json({
                        message: 'Login Successful'
                    })
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}