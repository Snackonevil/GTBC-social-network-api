const connection = require("../config/connection");
const colors = require("colors");
const { User, Thought } = require("../models");
const { userData, thoughtData } = require("./data");

const seedThoughts = async () => {
    for (const thought of thoughtData) {
        const newThought = await Thought.create(thought);
        await User.findOneAndUpdate(
            { username: newThought.username },
            { $push: { thoughts: newThought._id } }
        );
    }
};

connection.on("error", err => err);

connection.once("open", async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});

    await User.collection.insertMany(userData);
    console.log("USERS SEEDED".green);
    await seedThoughts();
    console.log("THOUGHTS SEEDED".green);
    process.exit(0);
});
