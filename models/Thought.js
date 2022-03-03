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
        // set default to current timestamp
        // user getter method to format the timestamp on query
    },
});

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        // must be between 1 and 280 characters
    },
    createdAt: {
        type: Date,
        // set default to current timestamp
        // user getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
});

// virtual called 'reactionCount' that retrieves the length of the thought's 'reactions' array field on query
thoughtSchema.virtual("reactionCount").get(() => {
    return this.reactions.length;
});

module.exports = mongoose.model("Thought", thoughtSchema);
