const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    username: { type: String, unique: true, lowercase: true, required: true},
    email: {type: String, required: true, unique: true },
    password: {type: String, required: true}
})

module.exports = mongoose.model('Admin', AdminSchema);

