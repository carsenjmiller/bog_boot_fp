const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
    _id: {type: Number, required: true},
    name: {type: String, required: true},
    breed: {type: String, required: true},
    status: {type: String, required: true},
    gender: {type: String, required: true},
    yearsOld: {type: Number, required: true},
    adopted: {type: Boolean, required: true},
    species: {type: String, required: true},
    imgSrc: {type: String, required: true}
})

module.exports = mongoose.model('Pets', petSchema);