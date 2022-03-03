const mongoose = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        // must be between 1 and 280 characters
    },
    createdAt: {
        type: Date,
        default: Date.now,
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
