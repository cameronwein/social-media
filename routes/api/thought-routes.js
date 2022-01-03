const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/')
  .get(getAllThought);

router.route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought);

// /api/thoughts/<userId>
router.route('/:userId')
  .post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeThought)

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);




module.exports = router;