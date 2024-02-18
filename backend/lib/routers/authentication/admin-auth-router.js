"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_authentication_1 = __importDefault(require("../../controllers/authentication/admin-authentication"));
const adminAuthRouter = express_1.default.Router();
adminAuthRouter.post('login', admin_authentication_1.default.login);
exports.default = adminAuthRouter;
