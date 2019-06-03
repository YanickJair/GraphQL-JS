const { 
  GraphQLObjectType
} = require("graphql");

const _ = require("./types");

exports.QueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    hello: {
      type: _.HelloWorldType
    },
    cloud: { type: _.CloudType }
  })
});