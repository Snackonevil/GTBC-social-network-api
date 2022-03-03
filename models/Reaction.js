const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
    reactionId: mongoose.ObjectId,
    reactionBody: {
        type: String,
        required: true,
        // 280 character max
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = reactionSchema;
