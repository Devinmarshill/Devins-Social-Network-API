const router = require('express').Router();
const videoRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');
//http://localhost:3001/api/thoughts
router.use('/thoughts', thoughtRoutes);

//http://localhost:3001/api/user
router.use('/users', userRoutes);

module.exports = router;