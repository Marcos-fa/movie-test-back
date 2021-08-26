const { Router } = require('express');
const app = Router();

const { add, update, deleteM } = require('../controllers/movies.controller');

app.post('/add', add);
app.post('/update', update);
app.get('/delete', deleteM); 

module.exports = app;