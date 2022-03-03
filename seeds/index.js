const connection = require("../config/connection");
const colors = require("colors");
const { User, Thought } = require("../models");
const { userData } = require("./data");

connection.on("error", err => err);

connection.once("open", async () => {
    console.log("Connected to MongoDB".cyan.underline);
    await User.deleteMany({});
    await Thought.deleteMany({});

    await User.collection.insertMany(userData);
    process.exit(0);
});
