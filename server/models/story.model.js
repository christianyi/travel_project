const mongoose = require('mongoose');
const StorySchema = new mongoose.Schema({
    location: { 
        type: String,
        required: [true, "Please enter a location"],
        minLength: [1, "location must be longer than 1 character"],

    },
    date: { 
        type: Date,
        required: [true, "please enter a date"],
        
    },
    story: {
        type: String,
        required: [true, "A user's story is required"],
        minLength: [4, "A user's story must be at least 4 characters"]
    }
    
}, { timestamps: true });
module.exports = mongoose.model('story', StorySchema);

