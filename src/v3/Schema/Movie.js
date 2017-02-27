const graphql = require('graphql');
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLList = graphql.GraphQLList;
const GraphQLString = graphql.GraphQLString;

const Actor = require('./Actor');

const Movie = new GraphQLObjectType({
    name: 'MovieType',
    fields: () => ({
        title: {
            type: GraphQLString
        },
        actors: {
            type: new GraphQLList(Actor)
        }
    })
});

module.exports = Movie;
