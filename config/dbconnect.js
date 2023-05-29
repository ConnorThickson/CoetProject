const mongoose = require('mongoose');

// const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

exports.connect = () => {
    mongoose.connect('mongodb://mongodb:27017/dockerproject',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    ).then(console.log("Mongo Jongo lets play some Bongos")).catch((err) => {
        console.error("FAILED TO MONGO THE BONGO");
        console.error(err);
    });
};