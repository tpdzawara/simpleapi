const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userName: { type: String, unique: true, required: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model('Admin', AdminSchema);

