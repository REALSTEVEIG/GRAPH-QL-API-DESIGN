"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersGQLSchema = void 0;
const graphql_1 = require("graphql");
exports.usersGQLSchema = (0, graphql_1.buildSchema)(`
    type User {
        id: String!
        username: String!
        email: String!
        password: String!
    }

    type Query {
        users: usersInfoResponse!
        user(id: String!): User!
    }

    type usersInfoResponse {
        success: Boolean!
        total: Int!
        users: [User!]!
    }

    type Mutation {
        regUser(username: String!, email: String!, password: String!): User!
        loginUser(email: String!, password: String!): User!
        updateUser(id: String!, username: String, email: String, password: String): User!
        deleteUser(id: String!): deleteResponse!
    }

    type deleteResponse {
        success: Boolean!
        message: String!
        id: String!
    }

`);
