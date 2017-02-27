
const graphql = require('graphql');
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;
const GraphQLInt = graphql.GraphQLInt;

const Droid = new GraphQLObjectType({
    name: 'DroidType',
    fields: () => ({
        id: { type: GraphQLInt },
        droidId: { type: GraphQLString }
    })
});

module.exports = Droid;
