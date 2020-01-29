const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IndividualClient = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: {type: String, required: true, unique: true, match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
    password: {type: String, required: true},
    idNumber: { type: Number, required: true, min: 11 , max: 11},
    address: { type: String, required: true},
    phoneNumber: { type: Number, require: true}

});

module.exports = mongoose.model('IndvidualClient', IndividualClient);