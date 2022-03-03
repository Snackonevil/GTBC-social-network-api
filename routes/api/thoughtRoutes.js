// route: /api/thoughts
const router = require("express").Router();
const {
    getThoughts,
    getThoughtById,
    updateThought,
    deleteThought,
    createThought,
} = require("../../controllers/thoughtController");

router
    // route: /api/thoughts
    .route("/")

    // GET: get all thoughts
    .get(getThoughts)

    // POST: create new thought (push created thought's _id to associated user's 'thoughts' field)
    .post(createThought);

router
    // route: /api/thoughts/:thoughtId
    .route("/:thoughtId")
    // GET: get thought by id
    .get(getThoughtById)
    // PUT: update thought by id
    .put(updateThought)
    // DELETE: delete thought by id
    .delete(deleteThought);

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
