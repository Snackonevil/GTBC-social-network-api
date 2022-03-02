const mongoose = require("mongoose");

const userSchema = new mongoose.SchemaType({
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

module.exports = mongoose.model("User", userSchema);
