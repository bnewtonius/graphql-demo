
const graphql = require('graphql');
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;
const GraphQLInt = graphql.GraphQLInt;

const Alien = new GraphQLObjectType({
    name: 'AlienType',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString }
    })
});

module.exports = Alien;
