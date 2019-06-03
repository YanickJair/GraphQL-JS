const express = require("express");

const graphqlHttp = require('express-graphql');

const graphqlSchema = require("./graphql/schema").Schema;

const graqhqlResolvers = require("./graphql/resolver");

const app = express();

app.use(function(err, req, res, next) {
  console.error(err.stack);
  next(err);
});

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graqhqlResolvers,
    graphiql: true,
    formatError(err) {
      if (!err.originalError) {
        return err;
      }

      const data = err.originalError.data;
      const message = err.message || 'Ocorreu algum erro.';
      const code = err.originalError.code || 500;

      logs.log({
        private: false,
        level: "error",
        message: message
      });
      return { message: message, status: code, data: data };
    }
  })
);

const PORT = 8002;

const link = `http://localhost:${PORT}/graphql`;

app.listen(PORT);

console.log(`\App running at ${link}`);