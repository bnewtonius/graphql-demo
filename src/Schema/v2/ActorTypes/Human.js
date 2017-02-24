
const graphql = require('graphql');
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;
const GraphQLInt = graphql.GraphQLInt;

const Human = new GraphQLObjectType({
    name: 'HumanType',
    fields: () => ({
        id: { type: GraphQLInt },
        fname: { type: GraphQLString },
        lname: { type: GraphQLString }
    })
});

module.exports = Human;
