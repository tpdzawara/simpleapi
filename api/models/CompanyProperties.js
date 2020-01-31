const mongoose = require(mongoose);

const Schema = mongoose.Schema;

const PropertySchema =  new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    physicalAdress: { type: String, required: true }
})

module.export = mongoose.model('Properties', )