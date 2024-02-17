"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_categories_1 = __importDefault(require("../../controllers/product-categories/product-categories"));
const productCategoryRouter = express_1.default.Router();
productCategoryRouter.post('/create', product_categories_1.default.createProductCategory);
productCategoryRouter.get('/', product_categories_1.default.findAllProductCategories);
productCategoryRouter.get('/:id', product_categories_1.default.findProductCategoryById);
productCategoryRouter.put('/update/:id', product_categories_1.default.updateProductCategory);
productCategoryRouter.delete('/delete/:id', product_categories_1.default.deleteProductCategory);
exports.default = productCategoryRouter;
