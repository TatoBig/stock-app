import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import { request, gql } from "graphql-request";
import mongoose from "mongoose";
import dotenv from "dotenv";
require('dotenv').config()

const query = gql`
  query Test {
    listPosts {
      success
      errors
      post {
        sector
      }
    }
  }
`;

export const server = new ApolloServer({
  schema,
});

const port = 3000;
server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  request("http://localhost:5000/graphql", query).then((data) =>
    console.log(data)
  );
  connectMongo();
});

const connectMongo = async () => {
  mongoose.connect(process.env.MONGO)
  console.log("Connected to MongoDB");
};
