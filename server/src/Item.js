const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    question: String,
    answers: [String],
    correctAnswerId: Number
});

module.exports = mongoose.model('Item', ItemSchema);