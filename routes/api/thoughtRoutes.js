// route: /api/thoughts
const router = require("express").Router();

router
    // route: /api/thoughts
    .route("/")

    // GET: get all thoughts
    .get((req, res) => {
        res.send(`getting all thoughts`);
    })

    // POST: create new thought (push created thought's _id to associated user's 'thoughts' field)
    .post((req, res) => {
        res.send(`creating a new thought`);
    });

router
    // route: /api/thoughts/:thoughtId
    .route("/:thoughtId")
    // GET: get thought by id
    .get((req, res) => {
        res.send(`getting thought with id ${req.params.thoughtId}`);
    })
    // PUT: update thought by id
    .put((req, res) => {
        res.send(`udating thought with id ${req.params.thoughtId}`);
    })
    // DELETE: delete thought by id
    .delete((req, res) => {
        res.send(`deleting thought with id ${req.params.thoughtId}`);
    });

router
    // route: api/thoughts/:thoughtId/reactions
    // POST: create reaction stored in a single thought's reaction field
    .post("/:thoughtId/reactions", (req, res) => {
        res.send(
            `creating reaction for thought with id ${req.params.thoughtId}`
        );
    });

router
    // route: api/thoughts/:thoughtId/reactions/:reactionId
    // DELETE: pull and remove a reaction by the reaction's 'reactionId' value
    .delete("/:thoughtId/reactions/:reactionId", (req, res) => {
        res.send(
            `deleting reaction with reactionId ${req.params.reactionId} from thought with id ${req.params.thoughtId}`
        );
    });

module.exports = router;
