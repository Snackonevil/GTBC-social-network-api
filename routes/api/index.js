// route: /api
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

// route: /api
router.get("/", (req, res) => {
    res.send("hello");
});

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;
