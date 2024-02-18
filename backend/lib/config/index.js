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
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default
            .connect(baseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
            .then(() => {
            console.log('connection successful');
        });
    }
    catch (error) {
        console.log(`connection failed, ${error}`);
        process.exit(1);
    }
});
module.exports = connectDB;
