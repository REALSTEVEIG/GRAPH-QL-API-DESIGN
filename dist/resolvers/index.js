"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const user_1 = require("./user");
const product_1 = require("./product");
exports.resolvers = [user_1.UsersResolver, product_1.ProductsResolver];
