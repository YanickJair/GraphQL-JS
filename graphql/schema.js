const { 
  GraphQLSchema
} = require("graphql");

const { QueryType } = require("./query");
const { MutationType } = require("./mutation");
exports.Schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});
