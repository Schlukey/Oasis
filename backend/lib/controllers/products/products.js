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
class ProductsController {
    constructor() {
        this.createProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const product = new config_1.Products({
                    name: req.body.name,
                    description: req.body.description,
                    category: req.body.category,
                    thumbnail: req.body.thumbnail,
                    productImages: req.body.productImages,
                });
                yield product.save();
                res.json(product);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(404).json({
                        message: error.message,
                    });
                }
            }
        });
        this.findAllProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield config_1.Products.find();
                res.json(products);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({
                        message: error.message,
                    });
                }
            }
        });
        this.findProductById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield config_1.Products.findById(req.body.id || req.params.id);
                res.json(product);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({
                        message: error.message,
                    });
                }
            }
        });
        this.updateProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield config_1.Products.findByIdAndUpdate(req.body.id || req.params.id, req.body, {
                    new: true,
                });
                if (!product) {
                    res.status(404).json({
                        message: 'Product not found',
                    });
                }
                res.json(product);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({
                        message: error.message,
                    });
                }
            }
        });
        this.deleteProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield config_1.Products.findByIdAndDelete(req.body.id || req.params.id);
                if (!product) {
                    res.status(404).json({
                        message: 'Product not found',
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
exports.default = new ProductsController();
