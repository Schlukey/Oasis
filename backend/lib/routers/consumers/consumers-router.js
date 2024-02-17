"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const consumers_1 = __importDefault(require("../../controllers/consumers/consumers"));
const consumersRouter = express_1.default.Router();
consumersRouter.post('/create', consumers_1.default.createConsumer);
consumersRouter.get('/', consumers_1.default.findAllConsumers);
consumersRouter.get(':id', consumers_1.default.findConsumerById);
consumersRouter.put('/update/:id', consumers_1.default.updateConsumer);
consumersRouter.delete('/delete/:id', consumers_1.default.deleteConsumer);
exports.default = consumersRouter;
