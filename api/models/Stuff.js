const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StuffSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { type: String, required: true},
    surName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber:{ type: Number, required: true},
    idNumber: { type: String, required: true },
    nationality: { type: String, required: true },
    gender: { type: String, required: true },
    department: { type: String, required: true },
    jobDescription: { type: String, required: true },
    employmentType: { type: String, required: true },
    payRate: { type: String, required: true },
    startDate: { type: String, required: true}
    

});


module.exports = mongoose.model('StuffMembers', StuffSchema);