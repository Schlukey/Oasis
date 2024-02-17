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
const config_1 = require("../../config");
class OrdersController {
    constructor() {
        this.createConsumer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const order = new config_1.Orders({
                    buyer: req.body.buyer,
                    seller: req.body.seller,
                    products: req.body.products,
                });
                yield order.save();
                res.json(order);
            }
            catch (e) {
                if (e instanceof Error) {
                    res.status(500).json({
                        message: e.message,
                    });
                }
            }
        });
        this.findAllOrders = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield config_1.Orders.find();
                res.json(orders);
            }
            catch (e) {
                if (e instanceof Error) {
                    res.status(500).json({
                        message: e.message,
                    });
                }
            }
        });
        this.findOrderById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const order = yield config_1.Orders.findById(req.body.id || req.params.id);
                if (!order) {
                    res.status(404).json({
                        message: 'No order found',
                    });
                }
                res.json(order);
            }
            catch (e) {
                if (e instanceof Error) {
                    res.status(500).json({
                        message: e.message,
                    });
                }
            }
        });
        this.findAllConsumerOrders = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield config_1.Orders.find();
                const userOrders = orders.filter((x) => x.buyer === req.body.id);
                res.json(userOrders);
            }
            catch (e) {
                if (e instanceof Error) {
                    res.status(500).json({
                        message: e.message,
                    });
                }
            }
        });
        this.findAllStoreOrders = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield config_1.Orders.find();
                const storeOrders = orders.filter((x) => x.seller === req.body.id);
                res.json(storeOrders);
            }
            catch (e) {
                if (e instanceof Error) {
                    res.status(500).json({
                        message: e.message,
                    });
                }
            }
        });
        this.deleteOrder = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const order = yield config_1.Orders.findByIdAndDelete(req.body.id);
                if (!order) {
                    res.status(404).json({
                        message: 'Order not found',
                    });
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({
                        message: error.message,
                    });
                }
            }
        });
    }
}
exports.default = new OrdersController();
