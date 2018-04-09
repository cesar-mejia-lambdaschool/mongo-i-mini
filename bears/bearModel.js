const mongoose = require('mongoose');

const bearSchema = new mongoose.Schema({
    species: { 
        type: String,
        required: true,
    },
    lainName: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

const bearModel = mongoose.model('Bear', bearSchema); //bears collection

module.exports = bearModel;