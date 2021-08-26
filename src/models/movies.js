const { Schema, model } = require('mongoose');

const Movie = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    gender: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = model('Movie', Movie)
