const mongoose = require('mongoose');


const itemSchema =  new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
});

//const item = mongoose.model('item', itemSchema);
module.exports = mongoose.model('Item', itemSchema);