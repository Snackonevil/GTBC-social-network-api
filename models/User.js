const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
    },
    thoughts: {
        type: Array,
    },
    friends: {
        type: Array,
    },
});

// virtual called 'friendCount' that retrieves the length of the user's 'friends' array field on query
userSchema.virtual("friendCount").get(() => {
    return this.friends.length;
});

module.exports = mongoose.model("User", userSchema);
