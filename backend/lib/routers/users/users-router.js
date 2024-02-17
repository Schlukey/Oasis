"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../../controllers/users/users"));
const usersRouter = express_1.default.Router();
usersRouter.post('/create', users_1.default.createUser);
usersRouter.get('/', users_1.default.findAllUsers);
usersRouter.get('/:id', users_1.default.findUserById);
usersRouter.put('/update/:id', users_1.default.updateUser);
usersRouter.delete('/delete/:id', users_1.default.deleteUser);
exports.default = usersRouter;
