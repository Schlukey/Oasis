"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_authentication_1 = __importDefault(require("../../controllers/authentication/user-authentication"));
const userAuthRouter = express_1.default.Router();
userAuthRouter.post('login', user_authentication_1.default.login);
exports.default = userAuthRouter;
