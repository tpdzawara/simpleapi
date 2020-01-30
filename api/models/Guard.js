const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const Guard = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guardId: { type: String, unique: true, required: true},
    address: { type: String, required: true },
    fullName: { type: String, required: true},
    phoneNumber:{ type: Number, required: true},
    password: { type: String, required: true}
})

module.exports = mongoose.model('Guards', Guard);