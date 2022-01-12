const graphql = require('graphql');
const { getUser } = require('../services/user');
const { getClaimByUser, getClaim, getClaims } = require('../services/claim');
const { getAdvantagesByClaim, getAdvantagesByUser } = require('../services/advantage');
const { getSupportByUser, getSupportByClaim } = require('../services/support');
const { getContrastByClaim, getContrastByUser } = require('../services/contrast');
const { getDetrimentsByClaim, getDetrimentsByUser } = require('../services/detriment');
const { getClaimTagsByClaim } = require('../services/claim-tags');
const { getAllTags, getTag } = require('../services/tags');

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema, 
    GraphQLList, 
    GraphQLInt,
    GraphQLEnumType,
} = graphql;

const ClaimTagEnum = new GraphQLEnumType({
    name: 'ClaimTagEnum',
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

const ClaimTagType = new GraphQLObjectType({
    name: 'ClaimTag',
    fields: () => ({
        id: { type: GraphQLString },
        tag: { type: ClaimTagEnum }
    })
})

const ClaimTagAssociationsType = new GraphQLObjectType({
    name: "ClaimTagAssociation",
    fields: () => ({
        id: { type: GraphQLString },
        timestamp: { type: GraphQLString },
        claim: { 
            type: ClaimType,
            resolve(parentValue, args){
                const { claimId } = parentValue;
                return getClaim(claimId);
            }
        },
        tag: { 
            type: ClaimTagType,
            resolve(parentValue, args) {
                const { tagId } = parentValue;
                return getTag(tagId);
            }
        }
    })
})

const SupportType = new GraphQLObjectType({
    name: 'Support',
    fields: () => ({
        id: { type: GraphQLString },
        user: { 
            type: UserType,
            resolve(parentValue, args){
                const { userId } = parentValue;
                return getUser(userId);
            }
        },
        claim: { 
            type: ClaimType,
            resolve(parentValue, args){
                const { claimId } = parentValue;
                return getClaim(claimId);
            }
        },
        timestamp: { type: GraphQLString }
    })
});

const ContrastType = new GraphQLObjectType({
    name: 'Contrast',
    fields: () => ({
        id: { type: GraphQLString },
        user: { 
            type: UserType,
            resolve(parentValue, args){
                const { userId } = parentValue;
                return getUser(userId);
            }
        },
        claim: { 
            type: ClaimType,
            resolve(parentValue, args){
                const { claimId } = parentValue;
                return getClaim(claimId);
            }
        },
        timestamp: { type: GraphQLString }
    })
});

const AdvantageType = new GraphQLObjectType({
    name: 'Advantage',
    fields: () => ({
        id: { type: GraphQLString },
        user: { 
            type: UserType,
            resolve(parentValue, args){
                const { userId } = parentValue;
                return getUser(userId);
            }
        },
        claim: { 
            type: ClaimType,
            resolve(parentValue, args){
                const { claimId } = parentValue;
                return getClaim(claimId);
            }
        },
        timestamp: { type: GraphQLString },
        content: { type: GraphQLString },
        validityInSupport: { type: GraphQLInt }
    })
});

const DetrimentType = new GraphQLObjectType({
    name: 'Detriment',
    fields: () => ({
        id: { type: GraphQLString },
        user: { 
            type: UserType,
            resolve(parentValue, args){
                const { userId } = parentValue;
                return getUser(userId);
            }
        },
        claim: { 
            type: ClaimType,
            resolve(parentValue, args){
                const { claimId } = parentValue;
                return getClaim(claimId);
            }
        },
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
        user: { 
            type: UserType,
            resolve(parentValue, args) {
                const { userId } = parentValue;
                return getUser(userId);
            }
        },
        supports: { 
            type: new GraphQLList(SupportType),
            resolve(parentValue, args){
                const { id } = parentValue;
                return getSupportByClaim(id);
            }
        },
        contrasts: { 
            type: new GraphQLList(ContrastType),
            resolve(parentValue, args){
                const { id } = parentValue;
                return getContrastByClaim(id);
            }
        },
        advantages: { 
            type: new GraphQLList(AdvantageType),
            resolve(parentValue, args){
                const { id } = parentValue;
                return getAdvantagesByClaim(id);
            }
        },
        detriments: { 
            type: new GraphQLList(DetrimentType),
            resolve(parentValue, args){
                const { id } = parentValue;
                return getDetrimentsByClaim(id);
            },
        },
        tags: { 
            type: new GraphQLList(ClaimTagAssociationsType),
            resolve(parentValue, args){
                const { id } = parentValue;
                return getClaimTagsByClaim(id);
            }
        }
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
                const { id } = parentValue;
                return getClaimByUser(id);
            }
        },
        supports: { 
            type: new GraphQLList(SupportType),
            resolve(parentValue, args){
                const { id } = parentValue;
                return getSupportByUser(id);
            }
        },
        contrasts: { 
            type: new GraphQLList(ContrastType),
            resolve(parentValue, args){
                const { id } = parentValue;
                return getContrastByUser(id);
            }
        },
        advantages: { 
            type: new GraphQLList(AdvantageType),
            resolve(parentValue, args){
                const { id } = parentValue;
                return getAdvantagesByUser(id);
            }
        },
        detriments: { 
            type: new GraphQLList(DetrimentType),
            resolve(parentValue, args){
                const { id } = parentValue;
                return getDetrimentsByUser(id);
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
                const { id } = args;
                return getUser(id);
            }
        },
        claim: {
            type: ClaimType,
            args: { id: { type: GraphQLString }},
            resolve(parentValue, args){
                const { id } = args;
                return getClaim(id);
            }
        },
        allClaims: {
            type: GraphQLList(ClaimType),
            args: {},
            resolve(parentValue, args) {
                return getClaims();
            }
        },
        tags: {
            type: GraphQLList(ClaimTagType),
            args: {},
            resolve(parentValue, args) {
                return getAllTags();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});