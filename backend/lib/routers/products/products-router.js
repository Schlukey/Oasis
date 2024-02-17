"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = __importDefault(require("../../controllers/products/products"));
const productsRouter = express_1.default.Router();
productsRouter.post('/create', products_1.default.createProduct);
productsRouter.get('/', products_1.default.findAllProducts);
productsRouter.get('/:id', products_1.default.findProductById);
productsRouter.put('/update/:id', products_1.default.updateProduct);
productsRouter.delete('/delete/:id', products_1.default.deleteProduct);
exports.default = productsRouter;
