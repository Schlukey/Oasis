"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_router_1 = __importDefault(require("./routers/users/users-router"));
const admin_users_router_1 = __importDefault(require("./routers/admin-users/admin-users-router"));
const consumers_router_1 = __importDefault(require("./routers/consumers/consumers-router"));
const orders_router_1 = __importDefault(require("./routers/orders/orders-router"));
const products_router_1 = __importDefault(require("./routers/products/products-router"));
const product_categoies_router_1 = __importDefault(require("./routers/product-categories/product-categoies-router"));
const user_auth_router_1 = __importDefault(require("./routers/authentication/user-auth-router"));
const admin_auth_router_1 = __importDefault(require("./routers/authentication/admin-auth-router"));
const consumer_auth_router_1 = __importDefault(require("./routers/authentication/consumer-auth-router"));
const app = (0, express_1.default)();
require('./config/index').connect();
const port = process.env.PORT || 4200;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/auth/user', user_auth_router_1.default);
app.use('/auth/admin', admin_auth_router_1.default);
app.use('/auth/consumer', consumer_auth_router_1.default);
app.use('/users', users_router_1.default);
app.use('/admin-users', admin_users_router_1.default);
app.use('/consumer', consumers_router_1.default);
app.use('/orders', orders_router_1.default);
app.use('/products', products_router_1.default);
app.use('/product-categories', product_categoies_router_1.default);
