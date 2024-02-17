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
class AdminController {
    constructor() {
        this.createAdmin = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const admin = new config_1.AdminUsers({
                    email: req.body.email,
                    password: req.body.password,
                });
                yield admin.save();
                res.json(admin);
            }
            catch (e) {
                if (e instanceof Error) {
                    res.status(500).json({
                        message: e.message,
                    });
                }
            }
        });
        this.findAllAdmins = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const admins = yield config_1.AdminUsers.find();
                res.json(admins);
            }
            catch (e) {
                if (e instanceof Error) {
                    res.status(500).json({
                        message: e.message,
                    });
                }
            }
        });
        this.findAdminById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const admin = yield config_1.AdminUsers.findById(req.body.id || req.params.id);
                if (!admin) {
                    res.status(404).json({
                        message: 'No Admin user found',
                    });
                }
                res.json(admin);
            }
            catch (e) {
                if (e instanceof Error) {
                    res.status(500).json({
                        message: e.message,
                    });
                }
            }
        });
        this.updateAdmin = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const admin = yield config_1.AdminUsers.findOneAndUpdate(req.body.id || req.params.id, req.body, {
                    new: true,
                });
                if (!admin) {
                    res.status(404).json({
                        message: 'No Admin user found',
                    });
                }
                res.json(admin);
            }
            catch (e) {
                if (e instanceof Error) {
                    res.status(500).json({
                        message: e.message,
                    });
                }
            }
        });
        this.deleteAdmin = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const admin = yield config_1.AdminUsers.findByIdAndDelete(req.body.id || req.params.id);
                if (!admin) {
                    res.status(404).json({
                        message: 'No admin user found',
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
exports.default = new AdminController();
