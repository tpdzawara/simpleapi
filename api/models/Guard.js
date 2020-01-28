const { Schema } = require('mongoose');

const Guard = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guardId: { type: String, unique: true, required: true},
    fullName: { type: String, required: true},
    phoneNumber:{ type: Number, required: true},
    password: { types: Number, required: true}
})

module.exports = mongoose.model('Guards', Guard);