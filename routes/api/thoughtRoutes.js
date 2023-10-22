 const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtResponse,
  removeThoughtResponse,
} = require('../../controllers/thoughtController');

// /api/Thought
router.route('/').get(getThought).post(createThought);

// /api/Thought/:ThoughtId
router
  .route('/:ThoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thought/:ThoughtId/responses
router.route('/:ThoughtId/responses').post(addThoughtResponse);

// /api/Thought/:ThoughtId/responses/:responseId
router.route('/:ThoughtId/responses/:responseId').delete(removeThoughtResponse);

module.exports = router;
