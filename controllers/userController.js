const { User } = require("../models");

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await User.find();
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
    updateUser: async (req, res) => {},
    deleteUser: async (req, res) => {},
    createUser: async (req, res) => {},
};
