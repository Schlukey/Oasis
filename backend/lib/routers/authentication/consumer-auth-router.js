"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const consumer_authentication_1 = __importDefault(require("../../controllers/authentication/consumer-authentication"));
const consumerAuthRouter = express_1.default.Router();
consumerAuthRouter.post('/login', consumer_authentication_1.default.login);
exports.default = consumerAuthRouter;
