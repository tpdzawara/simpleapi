const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//models imports
const Admin = require('../models/Admin');
const Guard = require('../models/Guard');
const Stuff = require('../models/Stuff');
const Client = require('../models/Client');

//New Guard registration 16
//Cast error here if I'm creating a doc i would have to generate a mongo format id for _id
//????
exports.newGuardAccount = (req, res, next) => {
    Guard.find({ firstName: req.body.firstName })
        .exec()
        .then(guard => {
            if (guard.length >>= 1) {
                return 
                res.status(409).json({
                    message: 'Guard already exist'
                });
            } else {
                        //left out the phoneNumber field here...
                        const guard = new Guard({
                            _id: new mongoose.Types.ObjectId(), // was missing 'new' keyword here
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            address: req.body.address,
                            phoneNumber: req.body.phoneNumber
                        });
                        guard.save()
                            .then(doc => {
                                res.status(200).json({ 
                                    message: 'New Guard successful Added' 
                                });
                            })
                            .catch(err => {
                                console.log(err)
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                });
            }

//get All guards
exports.allGuards = function (req, res, next) {
    Guard.find({})
    .select('_id firstName  lastName  address phoneNumber')
    .exec()
    .then(guards => {
        res.status(200).json({message: guards})
    })
    .catch( err => {
        res.status(500).json({
            error: err
        })
    })
}



 //Add new StaffMenber
exports.addNewStuffMember = ( req, res, next) => {
    Stuff.find({ phoneNumber: req.body.phoneNumber }) // will give a cast error, I would have to generate a mongo id format ku frontend just to save a doc ?????
    .exec()
    .then(stuffMember => {

        if(stuffMember.length >= 1) {
            return res.status(409).json({
                message: 'Member Already Existed'
            });
        } else {
           const stuffMember = new Stuff({
                _id: new mongoose.Types.ObjectId(), // new here
                firstName: req.body.firstName,
                surName: req.body.lastName,
                dateOfBirth: req.body.dob,
                address: req.body.address,
                phoneNumber: req.body.phoneNumber,
                idNumber: req.body.idNumber,
                nationality: req.body.nationality,
                gender: req.body.gender,
                department: req.body.department,
                jobDescription: req.body.jobDescription,
                employmentType: req.body.employmentType,
                payRate: req.body.payrate,
                startDate: req.body.startDate
           });
           stuffMember.save()
           .then( stuff => {
               res.status(200).json({
                   message: 'New Stuff Member added.'
               });
           })
           .catch( eror => {
              console.log(eror)
            res.status(500).json({
                error: eror
            });
        });
      }
    })  
}

//Get Stuff
exports.allStuffMembers = function (req, res, next) {
    Stuff.find({})
    .select('_id firstName surName dateOfBirth address phoneNumber idNumber nationality gender department jobDescription employmentType payRate startDate')
    .exec()
    .then(stuffMember => {
        res.status(200).json({
            message: stuffMember
        })
    })
    .catch(er => { res.status(500).json({ error: er })})
}

//Add new Individual client
exports.newClient = ( req, res, next) => {
    Client.find({ email: req.body.email })
    .exec()
    .then( client => {
        if(client.length >= 1) {
            return res.status(409).json({
                message: 'Client with these details has already added.'
            });
        } else {
            const client = new Client ({
                _id: new mongoose.Types.ObjectId(), //new
                email: req.body.email,
                fullName: req.body.client,
                contactName: req.body.contactName,
                idNumber: req.body.mobileNumber,
                address: req.body.address,
                website: req.body.website, // left out but required
                mobileNumber: req.body.mobileNumber, // left out
                phoneNumber: req.body.phoneNumber,
            })
            client.save()
            .then( saved => {
                res.status(200).json({
                    message: 'New Client Added'
                })
            }) 
                .catch( errors => {
                    console.log(errors)
                    res.status(500).json({
                        error: errors
                    });
                });
            
        }
    });
}

exports.allClients = (req, res, next) => {
    Client.find({})
    .select('_id email firstName lastName idNumber address phoneNumber ')
    .exec()
    .then(client => {
        res.status(200).json({
            message: client
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
    });
}