
const graphql = require('graphql');
const GraphQLSchema = graphql.GraphQLSchema;
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;

const Query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        hello: {
            type: GraphQLString,
            resolve({db}) {
                db.logSomething();
                return 'world';
            }
        }
    }
});

const Schema = new GraphQLSchema({
    query: Query
});

module.exports = Schema;
