const ActorsDb = require('./dater/actors.json');
const MoviesDb = require('./dater/movies.json');

module.exports = {
    getMovie: function(title) {
        const matches = MoviesDb.filter( movie => movie.title === title );
        return matches.length > 0 ? matches[0] : null;
    },
    getActor: function(id) {
        const matches = ActorsDb.filter( actor => actor.id === id );
        return matches.length > 0 ? matches[0] : null;
    }
}
