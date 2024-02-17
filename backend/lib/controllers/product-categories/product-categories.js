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
class ProductCategoryController {
    constructor() {
        this.createProductCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const category = new config_1.ProductCategories({
                    name: req.body.name,
                    description: req.body.description,
                });
                yield category.save();
                res.json(category);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({
                        message: error.message,
                    });
                }
            }
        });
        this.findAllProductCategories = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield config_1.ProductCategories.find();
                res.json(categories);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.json(500).json({
                        message: error.message,
                    });
                }
            }
        });
        this.findProductCategoryById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield config_1.ProductCategories.findById(req.body.id || req.params.id);
                if (!category) {
                    res.status(404).json({
                        message: 'Category not found',
                    });
                }
                res.json(category);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({
                        message: error.message,
                    });
                }
            }
        });
        this.updateProductCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield config_1.ProductCategories.findByIdAndUpdate(req.body.id || req.params.id, req.body, { new: true });
                if (!category) {
                    res.status(404).json({
                        message: 'Product Category not found',
                    });
                }
                res.json(category);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({
                        message: error.message,
                    });
                }
            }
        });
        this.deleteProductCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield config_1.ProductCategories.findByIdAndDelete(req.body.id || req.params.id);
                if (!category) {
                    res.status(404).json({
                        message: 'Product Category not found',
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
exports.default = new ProductCategoryController();
