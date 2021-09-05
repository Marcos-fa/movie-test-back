const { Schema, model } = require('mongoose');

const Rating = new Schema({
    movieId: {type: String, required: true},
    userId: {type: String, required: true},
    rating: {type: String, required: true}
}, {
    timestamps: true
});

module.exports = model('Rating', Rating)
