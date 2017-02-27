const express = require('express');
const graphqlHTTP = require('express-graphql');

module.exports = function() {
    const app = express();

    app.use('/v1/graphql', graphqlHTTP({
        schema: require('./v1/Schema'),
        graphiql: true,
        rootValue: {
            db: require('./v1/db')
        }
    }));

    app.use('/v2/graphql', graphqlHTTP({
        schema: require('./v2/Schema'),
        graphiql: true,
        rootValue: {
            db: require('./v2/db')
        }
    }));

    app.use('/v3/graphql', graphqlHTTP({
        schema: require('./v3/Schema'),
        graphiql: true,
        rootValue: {
            db: require('./v3/db')
        }
    }));

    app.listen(4000);
}
