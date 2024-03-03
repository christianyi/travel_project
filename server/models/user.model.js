const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "A user's name is required"],
        minLength: [1, "A user's name must be longer than 1 character"],
        maxLength: [40, "A user's name must be shorter than 40 characters"]
    },
    age: { 
        type: Number,
        required: [true, "A user's age is required"],
        min: [1, 'user must be older than 1'],
        max: [140, 'user must be younger than 140']
    },
    bio: {
        type: String,
        required: [true, "A user's bio is required"],
        minLength: [4, "A user's bio must be at least 4 characters"]
    }
    
}, { timestamps: true });
module.exports = mongoose.model('user', UserSchema);

