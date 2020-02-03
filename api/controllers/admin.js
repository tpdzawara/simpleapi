const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

                                surname: req.body.surname,
                                name: req.body.name,
                                foreName: req.body.foreName,
                                dateOfBirth: req.body.dateOfBirth,
                                identityNumber: req.body.identityNumber,
                                gender: req.body.gender,
                                maritalStatus: req.body.maritalStatus,
                                address: req.body.address,
                                phoneNumber: req.body.phoneNumber,
                                qualification: req.body.qualification
                            ,

                                surname: req.body.surname,
                                name: req.body.name,
                                foreName: req.body.foreName,
                                address: req.body.address,
                                cellNumber: req.body.cellNumber,
                                relationShip: req.body.relationShip
                          ,

                                companyName: req.body.companyName,
                                address: req.body.address,
                                manager: req.body.manager,
                                jobTitle: req.body.jobTitle,
                                contractStatus: req.body.contractStatus,
                                managerNumber: req.body.managerNumber,
                                employmentPeriod: req.body.employmentPeriod
                           ,

                                academics: req.body.academics,
                                proQualifications: req.body. proQualifications,
                                driversLicences: req.body.driversLicences
                           ,
                            guardId:req.body.guardId,
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
    Guard.find({ guardId: req.body.guardId })
        .exec()
        .then(guard => {
            if (guard.length < 1) {
                res.status(401).json({
                    message: 'Login Failed'
                });
            }

            bcrypt.compare(req.body.password, guard[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    });
                }

                if (result) {
                    const token = jwt.sign({
                        guardId: guard[0].guardId
                    }, process.env.JWT_KEY, {
                        expires: '1h'
                    });
                    return res.status(200).json({
                        message: 'Auth Successful',
                        token: token
                    });
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}