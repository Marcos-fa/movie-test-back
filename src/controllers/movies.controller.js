const Movie = require('../models/movies');

const moviesCtrl = {};
moviesCtrl.add = async (req, res) => {
    try {
        const { title, description, gender } = req.body;

        const movie = new Movie({ title, description, gender });
        await movie.save();
        console.log(movie);
        res.send('Welcome: ' + username.toUpperCase());
        res.json({
            ok: true,
            movie: movie,
        })

    } catch (error) {
        console.log(error);
        res.send('Error interno en el servidor');
    }
}

moviesCtrl.update = async (req, res) => {
    res.send('update');
}

moviesCtrl.deleteM = (req, res) => {
    console.log(req);
    res.send('logout');
}

module.exports = moviesCtrl;