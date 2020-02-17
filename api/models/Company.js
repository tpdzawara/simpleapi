const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const Company = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    //company details
    companyName: { type: String, required: true},
    address: { type: String, required: true},
    landline: { type: Number, required: true},
    cell: { type: Number, required: true},

    email: { 
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
    //Contact Person
    name: { type: String, required: true },
    position: { type: String, required: true },
    phoneNumber: { type: Number, required: true },

    //properties
    propName: { type: String, required: true },
    physicalAddress: { type: String, required: true },

    businessLine: { type: String, required: true }
})

module.exports = mongoose.model('Company', Company);