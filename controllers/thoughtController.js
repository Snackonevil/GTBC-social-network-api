const { Thought, Reaction } = require("../models");

module.exports = {
    getThoughts: async (req, res) => {
        try {
            const thoughts = await Thought.find({});
            res.status(200).json(thoughts);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    createThought: async (req, res) => {
        try {
            const newThought = await Thought.create(req.body);

            res.status(201).json(newThought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    getThoughtById: async (req, res) => {
        try {
            const thought = await Thought.findOne({
                _id: req.params.thoughtId,
                $dateToString: {
                    format: "%H:%M:%S:%L%z",
                    date: "$date",
                    timezone: "America/New_York",
                },
            });
            !thought
                ? res.status(404).json({ message: "Thought not found" })
                : res.status(200).json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    updateThought: async (req, res) => {
        try {
            const updatedThought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body }
            );
            !updatedThought
                ? res.status(404).json({ message: "Thought not found" })
                : res.status(202).json({ message: "Thought updated" });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    deleteThought: async (req, res) => {
        try {
            const thought = await Thought.findOneAndDelete({
                _id: req.params.thoughtId,
            });
            !thought
                ? res.status(404).json({ message: "Thought not found" })
                : res.status(200).json({ message: "Thought deleted" });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    createReaction: async (req, res) => {
        try {
            const newReaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $push: { reactions: req.body } }
            );
            newReaction
                ? res.status(200).json({ message: "reaction added" })
                : res.status(404).json({ message: "reaction not added" });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};
