
const graphql = require('graphql');
const GraphQLSchema = graphql.GraphQLSchema;
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;

const Movie = require('./Movie');


const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: Movie,
            args: {
                title: {
                    type: GraphQLString
                }
            },
            resolve({db}, {title}) {
                return db.getMovie(title);
            }
        }
    }
});

const Schema = new GraphQLSchema({
    query: Query
});

module.exports = Schema;
