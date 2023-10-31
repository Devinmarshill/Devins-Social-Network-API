// const { connect, connection } = require('mongoose');

// connect('mongodb://127.0.0.1:27017/videosAndResponses');

// module.exports = connection;


const mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1:27017/socialNetwork');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialmedia');

module.exports = mongoose.connection;