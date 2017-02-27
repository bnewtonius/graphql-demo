
const graphql = require('graphql');
const GraphQLUnionType = graphql.GraphQLUnionType;
const GraphQLString = graphql.GraphQLString;
const GraphQLId = graphql.GraphQLId;

const Human = require('./ActorTypes/Human');
const Alien = require('./ActorTypes/Alien');
const Droid = require('./ActorTypes/Droid');

const ActorUnion = new GraphQLUnionType({
    name: 'ActorUnion',
    types: [
        Droid,
        Human,
        Alien
    ],
    resolveType(obj) {
        switch(obj.type) {
            case 'alien' : return Alien;
            case 'human' : return Human;
            case 'droid' : return Droid
        }
    },
})

module.exports = ActorUnion;
