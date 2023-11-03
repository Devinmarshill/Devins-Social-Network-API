 const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReactions,
  removeReactions,
} = require('../../controllers/thoughtController');

// /api/Thought
router.route('/').get(getThought).post(createThought);

// /api/Thought/:ThoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thought/:ThoughtId/reactions
router.route('/:thoughtId/reactions').post(addReactions);

// /api/Thought/:ThoughtId/responses/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReactions);

module.exports = router;
