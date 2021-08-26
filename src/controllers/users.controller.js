const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const serialize = require('cookie');
const jsend = require('jsend');

const usersCtrl = {};
usersCtrl.signup = async (req, res) => {
    try {
        const { username, password } = req.body;
        const usernameTaken = await User.findOne({ username: username });
        if (usernameTaken) {
            res.status(400).send('Username already taken');
        } else {
            const user = new User({ username, password });
            user.password = await user.encryptPassword(password);
            await user.save();
            jwt.sign({ _id: user._id }, 'secretKey')
            console.log(user);
            res.send('Welcome: ' + username.toUpperCase());
        }
    } catch (error) {
        console.log(error);
        res.send('Error interno en el servidor');
    }
}

usersCtrl.signin = async (req, res) => {
    let body = req.body;
    console.log(body)
    User.findOne({ username: body.username }, async (err, user) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            })
        }
        if (!user || ! bcryptjs.compareSync(body.password, user.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "User or password incorrect"
                }
            })
        } 


         let token = jwt.sign({
            usuario: user,
        }, 'test', {
            // expiresIn: 
        });

        // const cookieOptions = {
        //     httpOnly: true,
        //     path: '/',
        //     sameSite: 'none',
        //     // domain: 'http://localhost:3001',
        //     secure: false
        // }

        // const tokenCookie = await serialize('token', token, cookieOptions);
        // res.setHeader('Set-Cookie', [tokenCookie]);
        // res.setHeader('Content-Type', 'application/json');
        // res.status(200).json(jsend.success(true));
        

        res.json({
            ok: true,
            user: user,
            token,
        })


    });
}

usersCtrl.logout = (req, res) => {
    console.log(req);
    res.send('logout');
}

module.exports = usersCtrl;