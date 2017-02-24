const express = require('express');
const graphqlHTTP = require('express-graphql');

const Schema = require('./Schema');

module.exports = function() {
    const app = express();

    app.use('/graphql/v1', graphqlHTTP({
        schema: Schema.v1,
        graphiql: true,
        rootValue: {
            db: require('./db/v1')
        }
    }));

    app.use('/graphql/v2', graphqlHTTP({
        schema: Schema.v2,
        graphiql: true,
        rootValue: {
            db: require('./db/v2')
        }
    }));

    app.listen(4000);
}
