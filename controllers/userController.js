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
    addFriend: async (req, res) => {
        try {
            const friend = await User.findOne({ _id: req.params.friendId });
            if (!friend) {
                res.status(404).json({
                    message: "invalid user to be added as friend",
                });
                return;
            }
            const checkFriend = await User.findOne({
                _id: req.params.userId,
                friends: req.params.friendId,
            });

            // Check if friend Id already exists in user.friends array
            if (checkFriend) {
                console.log("already friends");
                res.status(400).json({ message: "Already friends" });
            } else {
                const user = await User.findOneAndUpdate(
                    { _id: req.params.userId },
                    { $push: { friends: req.params.friendId } }
                );
                !user
                    ? res.status(404).json({ message: "User not found" })
                    : res.status(200).json({ message: "Friend added" });
            }
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },
    deleteFriend: async (req, res) => {
        try {
            const checkFriend = await User.findOne({
                _id: req.params.userId,
                friends: req.params.friendId,
            });
            if (checkFriend) {
                await User.findOneAndUpdate(
                    { _id: req.params.userId },
                    { $pull: { friends: req.params.friendId } }
                );
                res.status(200).json({ message: "Friend removed" });
            } else {
                res.status(400).json({ message: "Users are not friends" });
            }
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },
};
