const mongoose = require('mongoose');

//models imports
const Admin = require('../models/Admin');
const Guard = require('../models/Guard');

//New Guard registration Controller
exports.newGuardAccount = (req, res, next) => {
    Guard.findOne({ guardId: req.body.guardId })
        .exec()
        .then(guard => {

            if (guard) {
                return res.status(500).json({
                    message: 'Guard already exist'
                });
            } else {
                const guard = new Guard({
                    _id: mongoose.Types.ObjectId(),
                    guardId:req.body.guardId,
                    address: req.body.address,
                    fullName: req.body.fullName,
                    phoneNumber: req.body.phoneNumber,
                    password: req.body.password
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

// Guard Login
exports.guardLogin = (req, res, next) => {
    Guard.find({guardId: req.body.guardId})
        .exec()
        .then(guard => {

            if (guard.length < 1) {
                res.status(401).json({
                    message: 'Login Failed'
                });
            } else {

            }
        })
}