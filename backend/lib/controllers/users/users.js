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
class UserController {
    constructor() {
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = new config_1.Users({
                    name: req.body.name,
                    email: req.body.email,
                    storeName: req.body.storeName,
                    storeIcon: req.body.storeIcon,
                    password: req.body.password,
                    address: req.body.address,
                });
                user.save();
                res.json(user);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({
                        message: error.message,
                    });
                }
            }
        });
        this.findAllUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield config_1.Users.find();
                res.json(users);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({
                        message: error.message,
                    });
                }
            }
        });
        this.findUserById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield config_1.Users.findById(req.body.id || req.params.id);
                if (!user) {
                    res.status(404).json({
                        message: 'User not found',
                    });
                }
                res.json(user);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({
                        message: error.message,
                    });
                }
            }
        });
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield config_1.Users.findByIdAndUpdate(req.body.id || req.params.id, req.body, {
                    new: true,
                });
                if (!user) {
                    res.status(404).json({
                        message: 'User not found',
                    });
                }
                res.json(user);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({
                        message: error.message,
                    });
                }
            }
        });
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield config_1.Users.findByIdAndDelete(req.body.id || req.params.id);
                if (!user) {
                    res.status(404).json({
                        message: 'User not found',
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
exports.default = new UserController();
