const { Router } = require('express');
const app = Router();

const { signup, signin, logout } = require('../controllers/users.controller');

app.post('/signup', signup);
app.post('/signin', signin);
app.get('/logout', logout); 

module.exports = app;