const Movie = require('../models/movies');

const moviesCtrl = {};

moviesCtrl.getMovies = async (req, res) => {
    try {
        console.log('entra a getmovies')
        let movies = await Movie.find();
        console.log(movies);
        res.json({ok: true, movies: movies});
    } catch (err) {
        console.log(err)
        res.send('Internal Server Error');
    }
}

moviesCtrl.getMovieById = async (req, res) => {
    try {
        const movie = await Movie.find({_id: req.params.id});
        console.log(movie);
        res.json({
            ok: true,
            movie: movie,
        })
    } catch (err) {
        console.log(err)
        res.send('Internal Server Error');
    }
}

moviesCtrl.add = async (req, res) => {
    try {
        const { title, description, gender } = req.body;

        const movie = new Movie({ title, description, gender });
        await movie.save();
        console.log(movie);
        res.json({
            ok: true,
            movie: movie,
        })

    } catch (error) {
        console.log(error);
        res.send('Internal Server Error');
    }
}

moviesCtrl.update = async (req, res) => {
    try {
        const { _id, title, description, gender } = req.body;
        console.log(_id)
        let movie = await Movie.updateOne({_id, _id}, {title: title, description: description, gender: gender});
        console.log(movie);
        res.json({
            ok: true,
            movie: movie,
        })

    } catch (error) {
        console.log(error);
        res.send('Internal Server Error');
    }
}

moviesCtrl.deleteM = async (req, res) => {
    try {
        let _id = req.params.id;
        await Movie.findOneAndDelete({_id: _id});
        res.send('Movie Deleted');
    } catch (err) {
        console.log(error);
        res.send('Internal Server Error');
    }
    
}

module.exports = moviesCtrl;