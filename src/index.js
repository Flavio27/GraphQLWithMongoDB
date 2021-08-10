import { startServer } from "./startServer";
import typeDefs from "./graphql/typesDefs";
import resolvers from "./graphql/resolvers";

startServer({ typeDefs, resolvers });
