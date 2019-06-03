const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLBoolean
 } = require("graphql");

exports.CatalogInputType = new GraphQLInputObjectType({
  name: "CatalogInput",
  fields: {
    name: { type: GraphQLString },
    status: { type: GraphQLBoolean }
  }
});
