const { User } = require("../models");

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await User.find({});
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await User.findOne({ _id: req.params.userId });
            !user
                ? res.status(404).json({ message: `User not found` })
                : res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },
    updateUser: async (req, res) => {
        try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body }
            );
            !updatedUser
                ? res.status(404).json({ message: "User not found" })
                : res.status(202).json({ message: "User updated" });
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete({
                _id: req.params.userId,
            });
            !user
                ? res.status(404).json({ message: "User not found" })
                : res.status(202).json({ message: "User deleted" });
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },
    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);
            res.status(201).json(newUser);
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },
};
