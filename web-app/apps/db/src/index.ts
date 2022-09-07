import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import mongoose from "mongoose";
import { context } from './context'
require('dotenv').config()

export const server = new ApolloServer({
  schema,
  context
});

const port = 3000;
server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  connectMongo();
});

const connectMongo = async () => {
  mongoose.connect(process.env.MONGO_URL!)
  console.log("Connected to MongoDB");
};
