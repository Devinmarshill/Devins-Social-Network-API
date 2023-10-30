// const { connect, connection } = require('mongoose');

// connect('mongodb://127.0.0.1:27017/videosAndResponses');

// module.exports = connection;


const mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1:27017/socialNetwork');
mongoose.connect('mongodb://localhost:27017/socialNetwork');

module.exports = mongoose.connection;