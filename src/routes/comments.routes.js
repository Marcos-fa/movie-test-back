const { Router } = require('express');
const app = Router();

const { addComment, getComments } = require('../controllers/comments.controller');

app.get('/getComments', getComments);
app.post('/addComment', addComment);

module.exports = app;