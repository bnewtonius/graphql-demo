const graphql = require('graphql');
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLInt = graphql.GraphQLInt;

const ActorUnion = require('./ActorUnion');

const Actor = new GraphQLObjectType({
    name: 'ActorType',
    fields: () => ({
        id: { type: GraphQLInt },
        ref: {
            type: ActorUnion,
            resolve(parent,
                args,
                context,
                {rootValue: {db}}
            ) {
                return db.getActor(parent.id);
            }
        }
    })
});

module.exports = Actor;
