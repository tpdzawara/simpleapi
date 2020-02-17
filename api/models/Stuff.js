const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StuffSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
    name: { type: String, required: true},
    surName: { type: String, required: true },
    foreName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    identityNumber: { type: String, required: true },
    gender: { type: String, required: true },
    maritalStatus: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber:{ type: Number, required: true},
    
    //Next of Keen
    surName: { type: String, required: true },
    name: { type: String, required: true },
    foreName: { type: String, required: true},
    address: { type: String, required: true},
    phoneNumber: { type: Number, required: true },
    relationShip: { type: String, required: true },

    //Employment History
    companyName:{ type: String, required: true },
    address: { type: String, required: true },
    manager: { type: String, required: true },
    jobTitle: { type: String, required: true },
    contractStatus: { type: String, required: true },
    managerNumber: { type: String, required: true },
    employmentPeriod: { type: String, required: true},

    //Qualifications
    academics: { type: String, required: true },
    proQualifications: { type: String, required: true },
    driversLicences: { type: String, required: true },

});


module.exports = mongoose.model('StuffMembers', StuffSchema);