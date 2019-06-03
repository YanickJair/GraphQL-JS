const { 
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLID
} = require("graphql");

exports.HelloWorldType = new GraphQLObjectType({
  name: "HelloWorld",
  fields: () => ({
    message: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    }
  })
});

exports.CloudType = new GraphQLObjectType({
  name: "Cloud",
  fields: {
    message: { type: GraphQLString },
    cloud: { type: GraphQLString },
    date_add: { type: GraphQLString }
  }
});

const CatalogUsageType = new GraphQLObjectType({
  name: "Usage",
  fields: {
    disk: { type: GraphQLString },
    cpu: { type: GraphQLString },
    memory: { type: GraphQLString }
  }
});

exports.CatalogType = new GraphQLObjectType({
  name: "Catalog",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    vmemory: { type: GraphQLString },
    vcore: { type: GraphQLString },
    vstorage: { type: GraphQLString },
    price: { type: GraphQLString },
    status: { type: GraphQLBoolean },
    updated_at: { type: GraphQLString },
    created_at: { type: GraphQLString },
    service_type: { type: GraphQLString },
    usage: { type: CatalogUsageType }
  })
});
