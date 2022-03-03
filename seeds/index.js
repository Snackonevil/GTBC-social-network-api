const connection = require("../config/connection");
const colors = require("colors");
const { User, Thought } = require("../models");
const { userData } = require("./data");

connection.on("error", err => err);

connection.once("open", async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});

    await User.collection.insertMany(userData);
    console.log("USERS SEEDED".green);
    process.exit(0);
});
