"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsGQLSchema = void 0;
const graphql_1 = require("graphql");
exports.productsGQLSchema = (0, graphql_1.buildSchema)(`
    type Product {
        id: String!
        name: String!
        price: Int!
    }

    type Query {
        products: productsInfoResponse!
        product(id: String!): Product!
    }

    type productsInfoResponse {
        success: Boolean!
        total: Int!
        products: [Product!]!
    }

    type Mutation {
        addProduct(name: String!, price: Int!): Product!
        updateProduct(id: String!, name: String, price: Int): Product!
        deleteProduct(id: String!): deleteResponse!
    }

    type deleteResponse {
        success: Boolean!
        message: String!
        id: String!
    }
`);
