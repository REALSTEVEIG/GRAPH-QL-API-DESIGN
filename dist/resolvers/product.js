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
exports.ProductsResolver = void 0;
const products_1 = require("../model/products");
exports.ProductsResolver = {
    Query: {
        products: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const products = yield products_1.Product.find({});
                if (!products)
                    throw new Error('No products found');
                return {
                    success: true,
                    total: products.length,
                    products
                };
            }
            catch (error) {
                throw error;
            }
        }),
        product: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                if (!args.id)
                    throw new Error('No id provided');
                const product = yield products_1.Product.findById(args.id);
                if (!product)
                    throw new Error('No product found');
                return product;
            }
            catch (error) {
                throw error;
            }
        })
    },
    Mutation: {
        addProduct: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const product = yield products_1.Product.findOne({ name: args.name });
                if (product)
                    throw new Error('Product already exists');
                const newProduct = yield products_1.Product.create({
                    name: args.name,
                    price: args.price
                });
                return newProduct;
            }
            catch (error) {
                throw error;
            }
        }),
        updateProduct: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const id = args.id;
                if (!id)
                    throw new Error('No id provided');
                const product = yield products_1.Product.findById(args.id);
                if (!product)
                    throw new Error('No product found');
                const updateProduct = yield products_1.Product.findByIdAndUpdate(id, Object.assign({}, args), { new: true, runValidators: true });
                return updateProduct;
            }
            catch (error) {
                console.log(error);
            }
        }),
        deleteProduct: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const id = args.id;
                if (!id)
                    throw new Error('No id provided');
                const product = yield products_1.Product.findById(args.id);
                if (!product)
                    throw new Error('No product found');
                const deleteProduct = yield products_1.Product.findByIdAndDelete(id);
                return {
                    success: true,
                    message: 'Product deleted successfully',
                    id: deleteProduct === null || deleteProduct === void 0 ? void 0 : deleteProduct._id
                };
            }
            catch (error) {
                throw error;
            }
        })
    }
};
