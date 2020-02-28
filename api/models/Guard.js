const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const Guard = new Schema({
        _id: mongoose.Schema.Types.ObjectId, //mongo auto generates ids tho?
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        address: { type: String, required: true},
        phoneNumber:{ type: String, required: true}, //doesn't need to ne a number here, maybe a match for number format... 
       
})

module.exports = mongoose.model('Guards', Guard);