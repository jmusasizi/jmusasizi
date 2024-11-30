const mongoose = require('mongoose');
const passangerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    dob: {
        type: Date,
        trim: true,
    },
    nationality: {
        type: String,
        trim: true,
    },
    phoneNumber: {
        type: Number,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    pobox: {
        type: Number,
        trim: true,
    },
    emergencyPhone: {
        type: String,
        trim: true,
    },
    passportNumber: {
        type: Number,
        trim: true,
    },
    visa: {
        type: String,
        trim: true,
    },
    departureCity: {
        type: String,
        trim: true,
    },
    destinationCity: {
        type: String,
        trim: true,
    },

});

module.exports = mongoose.model('Passanger', passangerSchema);
