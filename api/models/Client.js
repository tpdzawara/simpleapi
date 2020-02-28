const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Individual = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullName: { type: String, required: true},
    email: {type: String, required: true, unique: true, match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
    contactName: { type: String, required: true },
    address: { type: String, required: true},
    phoneNumber: { type: String, required: true },
    website: { type: String, required: true },
    mobileNumber: { type: String, required: true }

});

module.exports = mongoose.model('IndvidualClient', Individual);