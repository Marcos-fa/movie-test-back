const express = require('express');
const cors = require('cors');
const session = require('express-session');
// Start
const app = express();
// Settings
app.set('port', process.env.PORT || 4000);

// MiddleWare
app.use(express.urlencoded({extended: false}));
app.unsubscribe(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Routes
app.use(require('../routes/index.routes'));
app.use(require('../routes/users.routes'));
app.use(require('../routes/movies.routes'));

// Global Variables
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
})


module.exports = app;