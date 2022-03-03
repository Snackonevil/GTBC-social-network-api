const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
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
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// virtual called 'reactionCount' that retrieves the length of the thought's 'reactions' array field on query
thoughtSchema.virtual("reactionCount").get(() => {
    return this.reactions.length;
});

module.exports = model("Thought", thoughtSchema);
