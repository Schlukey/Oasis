"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orders_1 = __importDefault(require("../../controllers/orders/orders"));
const ordersRouter = express_1.default.Router();
ordersRouter.post('/create', orders_1.default.createConsumer);
ordersRouter.get('/user/:id', orders_1.default.findAllConsumerOrders);
ordersRouter.get('/store/:id', orders_1.default.findAllStoreOrders);
ordersRouter.get('/', orders_1.default.findAllOrders);
ordersRouter.get('/:id', orders_1.default.findOrderById);
ordersRouter.delete('/delete/:id', orders_1.default.deleteOrder);
exports.default = ordersRouter;
