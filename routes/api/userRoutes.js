const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// /api/users
//http://localhost:3001/api/users/
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser)
  .update(updateUser)
  .delete(deleteUser);

router.route('/:userId/friends/:friendID').get(getSingleUser)
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
