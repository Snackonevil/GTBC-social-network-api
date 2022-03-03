// route: api/users
const router = require("express").Router();
const {
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUser,
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
    .post((req, res) => {
        res.send(
            `adding user with id ${req.params.friendId} to friends list of user ${req.params.userId}`
        );
    })
    // DELETE: remove friend from a user's friend list
    .delete((req, res) => {
        res.send(
            `Deleting user with id ${req.params.friendId} from friend's list with id ${req.params.userId}`
        );
    });

module.exports = router;
