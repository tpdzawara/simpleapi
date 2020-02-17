const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//models imports
const Admin = require('../models/Admin');
const Guard = require('../models/Guard');
const Company = require('../models/Company');
const Stuff = require('../models/Stuff');
const Individual = require('../models/Individual');

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
                        });

                        guard.save()
                            .then(doc => {
                                res.status(200).json({ message: 'New Guard successful Added' });
                            })
                            .catch(err => {
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                })
            }

//Add new Company Client
exports.addNewCompanyClient = (req, res, next) => {
    Company.find({email: req.body.email})
    .exec()
    .then( company => {
        if( company.length >= 1) {
            res.status(409).json({
                message:'Company existed !'
            });
        } else {
                    const company = new Company({
                        _id: mongoose.Types.ObjectId(),
                        //company details
                        companyName: req.body.companyName,
                        email: req.body.email,
                        address: req.body.address,
                        landline: req.body.landline,
                        cell: req.body.cell,
                        

                        //Contact Person
                        name: req.body.name,
                        position: req.body.position,
                        phoneNumber: req.body.phoneNumber,

                        //properties
                        propName: req.body.propName,
                        physicalAddress: req.body.physicalAddress,

                        businessLine: req.body.businessLine,

                    });
                    company.save()
                    .then( info => {
                        res.status(200).json({
                            message: 'New Company client  Added '
                        });
                    })
                    .catch( err => {
                        res.status(500).json({
                            error: err
                        })
                    })
                }
            }); 
        }
    //Add new StaffMenber
exports.addNewStuffMember = ( req, res, next) => {
    Stuff.find({ email: req.body.email })
    .exec()
    .then(stuffMember => {

        if(stuffMember.length >= 1) {
            return res.status(409).json({
                message: 'Member Already Existed'
            });
        } else {
           const stuffMember = new Stuff({
                _id: mongoose.Types.ObjectId(),
                email: req.body.email,
                name: req.body.name,
                surName: req.body.surName,
                foreName: req.body.foreName,
                dateOfBirth: req.body.dateOfBirth,
                identityNumber: req.body.identityNumber,
                gender: req.body.gender,
                maritalStatus: req.body.maritalStatus,
                address: req.body.address,
                phoneNumber: req.body.phoneNumber,

                //Next of Keen
                surName: req.body.surName,
                firstName: req.body.name,
                foreName: req.body.foreName,
                address: req.body.address,
                cellNumber: req.body.cellNumber,
                relationShip: req.body.relationShip,

                //Employment History
                companyName: req.body.companyName,
                address: req.body.address,
                manager: req.body.manager,
                jobTitle: req.body.jobTitle,
                contractStatus: req.body.contractStatus,
                managerNumber: req.body.managerNumber,
                employmentPeriod: req.body.employmentPeriod,

                //Qualifications
                academics: req.body.academics,
                proQualifications: req.body. proQualifications,
                driversLicences: req.body.driversLicences
           });
           stuffMember
           .save()
           .then( stuff => {
               res.status(200).json({
                   message: 'New Stuff Member added.'
               });
           })
           .catch( eror => {
            res.status(500).json({
                error: eror
            });
        });
        }
    })
    
}

//Add new Individual client
exports.newIndividualClient = ( req, res, next) => {
    Individual.find({ email: req.body.email })
    .exec()
    .then( individualClient => {
        if(individualClient.length >= 1) {
            return res.status(409).json({
                message: 'Client with these details has already added.'
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err){
                    return res.status(500).json({
                        error: 'Something went wrong'
                    });
        } else {
            const individualClient = new Individual({
                _id: mongoose.Types.ObjectId(),
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                idNumber: req.body.idNumber,
                address: req.body.address,
                phoneNumber: req.body.phoneNumber,
                password: hash
            })
            individualClient
            .save()
            .then( saved => {
                res.status(200).json({
                    message: 'New Individual Client Registered'
                })
                .catch( errors => {
                    res.status(500).json({
                        error: errors
                    });
                });
            });
        }
    });
}
    });
}