// route: api/users
const router = require("express").Router();
const {
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUser,
    addFriend,
    deleteFriend,
} = require("../../controllers/userController");

router
    // route: /api/users
    .route("/")
    // GET: get all users
    .get(getUsers)
    // PUT: create user
    .post(createUser);

router
    // route: /api/users/:userId
    .route("/:userId")
    // GET: user by id
    .get(getUserById)
    // PUT: update user
    .put(updateUser)
    // DELETE: delete user
    .delete(deleteUser);

router
    // route: /api/users/:userId/friends/:friendId
    .route("/:userId/friends/:friendId")
    // POST: add new friend to a user's friend list
    .post(addFriend)
    // DELETE: remove friend from a user's friend list
    .delete(deleteFriend);

module.exports = router;
