const mongoose = require('mongoose');
const mongodb_uri = process.env.MONGODB_URI || 'mongodb://localhost/movie-test';

mongoose.connect(mongodb_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err))