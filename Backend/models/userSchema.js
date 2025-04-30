const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, 
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required:true
    },
    phone: {
        type: String
    },
    photoUrl: {
        type:String
    }
}, {timestamps: true});

module.exports.User = mongoose.model("User", userSchema);