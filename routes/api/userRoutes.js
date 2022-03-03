// route: api/users
const router = require("express").Router();

router
    // route: /api/users
    .route("/")
    // GET: get all users
    .get((req, res) => {
        res.send("getting all users");
    })
    // PUT: create user
    .post((req, res) => {
        res.send("creating a user");
    });

router
    // route: /api/users/:userId
    .route("/:userId")
    // GET: user by id
    .get((req, res) => {
        res.send(`getting user with id ${req.params.userId}`);
    })
    // PUT: update user
    .put((req, res) => {
        res.send(`updating user with id ${req.params.userId}`);
    })
    // DELETE: delete user
    .delete((req, res) => {
        res.send(`deleting user with id ${req.params.userId}`);
    });

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
