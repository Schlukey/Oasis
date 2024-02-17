"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_controller_1 = __importDefault(require("../../controllers/admin-users/admin-controller"));
const adminUserRouter = express_1.default.Router();
adminUserRouter.post('/create', admin_controller_1.default.createAdmin);
adminUserRouter.get('/', admin_controller_1.default.findAllAdmins);
adminUserRouter.get('/:id', admin_controller_1.default.findAdminById);
adminUserRouter.put('/update/:id', admin_controller_1.default.updateAdmin);
adminUserRouter.delete('/delete/:id', admin_controller_1.default.deleteAdmin);
exports.default = adminUserRouter;
