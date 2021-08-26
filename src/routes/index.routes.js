const express = require('express');
const app = express();
const cors = require('cors');
const user = require('../models/user');
const jwt = require('jsonwebtoken')
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/movies', (req, res) => {
    res.send('Movies');
})

app.get('*', (req, res) => {
    res.send('404, page not found');
})

// app.post('/signUp', async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const User = new user({username, password});
//         await User.save();
//         jwt.sign({_id: User._id }, 'secretKey')
//         console.log(User);
//         res.send('Welcome: ' + username.toUpperCase());
//     } catch (error) {
//         console.log(error);
//         res.send('Error interno en el servidor');
//     }
// })

module.exports = app