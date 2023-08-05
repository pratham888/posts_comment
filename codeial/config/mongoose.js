const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/codeial_development');
mongoose.connect('mongodb://127.0.0.1/codial_development');

const db = mongoose.connection;

db.on('error' , console.error.bind(console,"Error connecting to mongoDB"));

db.once('open' , function(){
    console.log('Connected to Database:: MongoDB');

});

module.exports = db;