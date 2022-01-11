const graphql = require('graphql');

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema, 
    GraphQLList, 
    GraphQLInt,
    GraphQLEnumType,
    GraphQLID
} = graphql;

const ClaimTagType = new GraphQLEnumType({
    name: 'ClaimTag',
    values: {
        ENVIRONMENTAL: { value: 'environmental' },
        SOCIALWELFARE: { value: 'social welfare' },
        LITERATURE: { value: 'literature' },
        TECHNOLOGY: { value: 'technology' },
        GOVERNANCE: { value: 'governance' },
        ECONOMY: { value: 'economy' },
        ASTROPHYSICS: { value: 'astrophysics' }
    }
})

const SupportType = new GraphQLObjectType({
    name: 'Support',
    fields: () => ({
        id: { type: GraphQLString },
        user: { type: UserType },
        claim: { type: ClaimType },
        timestamp: { type: GraphQLString }
    })
});

const ContrastType = new GraphQLObjectType({
    name: 'Contrast',
    fields: () => ({
        id: { type: GraphQLString },
        user: { type: UserType },
        claim: { type: ClaimType },
        timestamp: { type: GraphQLString }
    })
});

const AdvantageType = new GraphQLObjectType({
    name: 'Advantage',
    fields: () => ({
        id: { type: GraphQLString },
        user: { type: UserType },
        claim: { type: ClaimType },
        timestamp: { type: GraphQLString },
        content: { type: GraphQLString },
        validityInSupport: { type: GraphQLInt }
    })
});

const DetrimentType = new GraphQLObjectType({
    name: 'Detriment',
    fields: () => ({
        id: { type: GraphQLString },
        user: { type: UserType },
        claim: { type: ClaimType },
        timestamp: { type: GraphQLString },
        content: { type: GraphQLString },
        validityInSupport: { type: GraphQLInt }
    })
});

const ClaimType = new GraphQLObjectType({
    name: 'Claim',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        shortDesc: { type: GraphQLString },
        content: { type: GraphQLString },
        timestamp: { type: GraphQLString },
        user: { type: UserType },
        supports: { 
            type: new GraphQLList(SupportType),
            resolve(parentValue, args){
                /** TODO */
            }
        },
        contrasts: { 
            type: new GraphQLList(ContrastType),
            resolve(parentValue, args){
                /** TODO */
            }
        },
        advantages: { 
            type: new GraphQLList(AdvantageType),
            resolve(parentValue, args){
                /** TODO */
            }
        },
        detriments: { 
            type: new GraphQLList(DetrimentType),
            resolve(parentValue, args){
                /** TODO */
            },
        },
        tags: { type: new GraphQLList(ClaimTagType) }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        hashedPassword: { type: GraphQLString },
        avatar: { type: GraphQLString },
        email: { type: GraphQLString },
        description: { type: GraphQLString },
        claims: { 
            type: new GraphQLList(ClaimType),
            resolve(parentValue, args){
                /** TODO */
            }
        },
        supports: { 
            type: new GraphQLList(SupportType),
            resolve(parentValue, args){
                /** TODO */
            }
        },
        contrasts: { 
            type: new GraphQLList(ContrastType),
            resolve(parentValue, args){
                /** TODO */
            }
        },
        advantages: { 
            type: new GraphQLList(AdvantageType),
            resolve(parentValue, args){
                /** TODO */
            }
        },
        detriments: { 
            type: new GraphQLList(DetrimentType),
            resolve(parentValue, args){
                /** TODO */
            },
        },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString }},
            resolve(parentValue, args) {
                /** TODO */
            }
        },
        claim: {
            type: ClaimType,
            args: { id: { type: GraphQLString }},
            resolve(parentValue, args){
                /** TODO */
            }
        },
        advantage: {
            type: AdvantageType,
            args: { id: { type: GraphQLString }},
            resolve(parentValue, args){
                /** TODO */
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});