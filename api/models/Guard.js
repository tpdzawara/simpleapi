const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const Guard = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    //Personal details
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        address: { type: String, required: true},
        phoneNumber:{ type: Number, required: true},
       
})

module.exports = mongoose.model('Guards', Guard);