const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//models imports
const Admin = require('../models/Admin');
const Guard = require('../models/Guard');
const Company = require('../models/Company');
const Stuff = require('../models/Stuff');
const Client = require('../models/Client');

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
/*exports.addNewCompanyClient = (req, res, next) => {
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
        }*/
    //Add new StaffMenber
exports.addNewStuffMember = ( req, res, next) => {
    Stuff.find({ _id: req.body._id })
    .exec()
    .then(stuffMember => {

        if(stuffMember.length >= 1) {
            return res.status(409).json({
                message: 'Member Already Existed'
            });
        } else {
           const stuffMember = new Stuff({
                _id: mongoose.Types.ObjectId(),
                firstName: req.body.firstName,
                surName: req.body.surName,
                dateOfBirth: req.body.dateOfBirth,
                address: req.body.address,
                phoneNumber: req.body.phoneNumber,
                idNumber: req.body.idNumber,
                nationality: req.body.nationality,
                gender: req.body.gender,
                department: req.body.department,
                jobDescription: req.body.jobDescription,
                employmentType: req.body.employmentType,
                payRate: req.body.payRate,
                startDate: req.body.startDate
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
                _id: mongoose.Types.ObjectId(),
                email: req.body.email,
                fullName: req.body.firstName,
                contactName: req.body.lastName,
                idNumber: req.body.idNumber,
                address: req.body.address,
                phoneNumber: req.body.phoneNumber,
            })
            client
            .save()
            .then( saved => {
                res.status(200).json({
                    message: 'New Client Added'
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

