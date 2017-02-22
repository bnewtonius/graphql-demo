const express = require('express');
const graphqlHTTP = require('express-graphql');

const Schema = require('./Schema');

module.exports = function() {
    const app = express();

    app.use('/graphql/v1', graphqlHTTP({
      schema: Schema.v1,
      graphiql: true
    }));

    app.listen(4000);
}
