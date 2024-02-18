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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const secretKey = (_a = process.env.KEY) !== null && _a !== void 0 ? _a : 'aRandomStringHere';
const userAuthenticate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const token = (_b = req.headers.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Login required' });
    }
    try {
        const decodedToken = jsonwebtoken_1.default.verify(token, secretKey);
        const user = yield config_1.AdminUsers.findById(decodedToken.id);
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            });
        }
        req.user = user;
        next();
    }
    catch (error) {
        res.status(401).json('Authentication required');
    }
});
exports.default = userAuthenticate;
