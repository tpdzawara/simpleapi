const { Schema } = require('mongoose');

const CompanyClient = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    companyName: { type: String, required: true},
    address: { type: String, required: true},
    phoneNumber: { type: Number, required: true},
    email: { type: String, required: true, unique: true, match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
    businessLine: { type: String, required: true }
})

module.exports = mongoose.model('Company', CompanyClient);