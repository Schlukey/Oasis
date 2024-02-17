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
class ConsumersController {
    constructor() {
        this.createConsumer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const consumer = new config_1.Consumers({
                    email: req.body.email,
                    name: req.body.name,
                    address: req.body.address,
                    password: req.body.password,
                });
                yield consumer.save();
                res.json(consumer);
            }
            catch (e) {
                if (e instanceof Error) {
                    res.status(500).json({
                        message: e.message,
                    });
                }
            }
        });
        this.findAllConsumers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const consumers = yield config_1.Consumers.find();
                res.json(consumers);
            }
            catch (e) {
                if (e instanceof Error) {
                    res.status(500).json({
                        message: e.message,
                    });
                }
            }
        });
        this.findConsumerById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const consumer = yield config_1.Consumers.findById(req.body.id || req.params.id);
                if (!consumer) {
                    res.status(404).json({
                        message: 'No user found',
                    });
                }
                res.json(consumer);
            }
            catch (e) {
                if (e instanceof Error) {
                    res.status(500).json({
                        message: e.message,
                    });
                }
            }
        });
        this.updateConsumer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const consumer = yield config_1.Consumers.findByIdAndUpdate(req.body.id || req.params.id, req.body, { new: true });
                if (!consumer) {
                    res.status(404).json({
                        message: 'No consumer found',
                    });
                }
                res.json(consumer);
            }
            catch (e) {
                if (e instanceof Error) {
                    res.status(500).json({
                        message: e.message,
                    });
                }
            }
        });
        this.deleteConsumer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const consumer = yield config_1.Consumers.findByIdAndDelete(req.body.id || req.params.id);
                if (!consumer) {
                    res.status(404).json({
                        message: 'No consumer found',
                    });
                }
            }
            catch (e) {
                if (e instanceof Error) {
                    res.status(500).json({
                        message: e.message,
                    });
                }
            }
        });
    }
}
exports.default = new ConsumersController();
