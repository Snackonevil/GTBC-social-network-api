// route: /api
const router = require("express").Router();
const users = require("./users");
const thoughts = require("./thoughts");

// route: /api
router.get("/", (req, res) => {
    res.send("hello");
});

router.use("/users", users);
router.use("/thoughts", thoughts);

module.exports = router;
