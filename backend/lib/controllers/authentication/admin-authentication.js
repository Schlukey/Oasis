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
const config_1 = require("../../config");
const secretKey = (_a = process.env.KEY) !== null && _a !== void 0 ? _a : 'aRandomStringHere';
class AdminAuthController {
    constructor() {
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                const user = (yield config_1.AdminUsers.findOne({ email }));
                if (!user) {
                    res.status(404).json({
                        message: 'No user found',
                    });
                }
                const match = (user === null || user === void 0 ? void 0 : user.password) === password;
                if (!match) {
                    res.status(401).json({
                        message: 'Incorrect login details',
                    });
                }
                const token = jsonwebtoken_1.default.sign({ id: user.id }, secretKey);
                res.json({ token });
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
;
exports.default = new AdminAuthController();
