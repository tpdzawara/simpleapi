const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const Guard = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    //Personal details
        surname: { type: String, required: true },
        name: { type: String, required: true },
        foreName: { type: String, required: true},
        dateOfBirth: { type: String, required: true },
        identityNumber: { type: String, required: true },
        gender: { type: String, required: true },
        maritalStatus: { type: String, required: true },
        address: { type: String, required: true },
        phoneNumber:{ type: Number, required: true},
        qualification: { type: String, required: true },
   //Next of Kin
            surname: { type: String, required: true },
            name: { type: String, required: true },
            foreName: { type: String, required: true},
            address: { type: String, required: true},
            cellNumber: { type: Number, required: true },
            relationShip: { type: String, required: true },

   //Employment history
        companyName:{ type: String, required: true },
        address: { type: String, required: true },
        manager: { type: String, required: true },
        jobTitle: { type: String, required: true },
        contractStatus: { type: String, required: true },
        managerNumber: { type: String, required: true },
        employmentPeriod: { type: String, required: true},

        //qualifications
        academics: { type: String, required: true },
        proQualifications: { type: String, required: true },
        driversLicences: { type: String, required: true },

    guardId: { type: String, unique: true, required: true}


})

module.exports = mongoose.model('Guards', Guard);