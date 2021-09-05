const { Schema, model } = require('mongoose');

const Comment = new Schema({
    movieId: {type: String, required: true},
    userId: {type: String, required: true},
    comment: {type: String, required: true}
}, {
    timestamps: true
});

module.exports = model('Comment', Comment)
