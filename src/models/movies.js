const { Schema, model } = require('mongoose');

const Movie = new Schema({
    titulo: { type: String, required: true },
    descripción: { type: String, required: true },
    genero: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = model('Movie', Movie)
