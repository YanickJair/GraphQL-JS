const { 
  GraphQLObjectType,
  GraphQLInt
} = require("graphql");

const {CatalogInputType} = require("./input");
const { CatalogType } = require("./types"); 

exports.MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    catalog: {
      type: CatalogType,
      args: { input: { type: CatalogInputType } } 
    }
    //os: { type: _.OperatingSystemType }
  }
});
