const { Router } = require('express');
const app = Router();

const { add, update, deleteM, getMovies, getMovieById } = require('../controllers/movies.controller');

app.get('/getmovies', getMovies);
app.get('/getMovieById/:id', getMovieById);

app.post('/add', add);
app.post('/update', update);

app.delete('/delete/:id', deleteM); 

module.exports = app;