"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategories = exports.Orders = exports.Products = exports.Consumers = exports.AdminUsers = exports.Users = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const user_1 = require("../models/user");
const admins_1 = require("../models/admins");
const consumer_1 = require("../models/consumer");
const orders_1 = require("../models/orders");
const products_1 = require("../models/products");
const product_categories_1 = require("../models/product-categories");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const baseUrl = (_a = process.env.CONNECTION) !== null && _a !== void 0 ? _a : 'mongodb+srv://lukequinn51:QRF3dfkXPnPwfqEZ@projectoasis.r1xa4ka.mongodb.net/';
exports.Users = mongoose_1.default.model('Users', user_1.UserSchema);
exports.AdminUsers = mongoose_1.default.model('Admin Users', admins_1.AdminUserSchema);
exports.Consumers = mongoose_1.default.model('Consumers', consumer_1.ConsumerSchema);
exports.Products = mongoose_1.default.model('Products', products_1.ProductSchema);
exports.Orders = mongoose_1.default.model('Orders', orders_1.OrderSchema);
exports.ProductCategories = mongoose_1.default.model('Product Categories', product_categories_1.ProductCategorySchema);
const db = mongoose_1.default.connection;
const app = (0, express_1.default)();
exports.connect = () => {
    mongoose_1.default
        .connect(baseUrl)
        .then(() => {
        console.log('connected to db');
    })
        .catch((e) => {
        console.log(`connection failed: ${e}`);
        process.exit(1);
    });
};
