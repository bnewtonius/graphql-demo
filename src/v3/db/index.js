const ActorsDb = require('./dater/actors.json');
const MoviesDb = require('./dater/movies.json');

const DataLoader = require('dataloader');

const cacheEnabled = false;
const maxBatchSize = 3;

const docLoader = new DataLoader(
    getActors,
    {
        cache: cacheEnabled,
        maxBatchSize: maxBatchSize
    }
);

function getActors(ids) {
    console.log(`Resolving actors: ${ids.join(',')}`);

    const matches = ActorsDb
        .filter( actor => ids.includes(actor.id) );

    return Promise.resolve(matches);
}

module.exports = {
    getMovie: function(title) {
        const matches = MoviesDb
            .filter( movie => movie.title === title );

        return Promise.resolve(matches.length > 0 ? matches[0] : null);
    },
    getActor: function(id) {
        return docLoader.load(id);
    }
}
