"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const connect_1 = require("./db/connect");
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
const PORT = parseInt(process.env.PORT) || 3000;
const server = new server_1.ApolloServer({
    typeDefs: schema_1.mergedGQLSchema,
    resolvers: resolvers_1.resolvers,
    introspection: true
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, connect_1.connectDB)(process.env.MONGO_URI);
        (0, standalone_1.startStandaloneServer)(server, { listen: { port: PORT } });
        console.log(`Server is listening on port ${PORT}`);
    }
    catch (error) {
        console.log(error);
    }
});
start();
