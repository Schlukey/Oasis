import { ProductCategories } from '../../config';
import { Request, Response } from 'express';

class ProductCategoryController {
  createProductCategory = async (req: Request, res: Response) => {
    try {
      const category = new ProductCategories({
        name: req.body.name,
        description: req.body.description,
      });
      await category.save();
      res.json(category);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({
          message: error.message,
        });
      }
    }
  };
  findAllProductCategories = async (req: Request, res: Response) => {
    try {
      const categories = await ProductCategories.find();
      res.json(categories);
    } catch (error) {
      if (error instanceof Error) {
        res.json(500).json({
          message: error.message,
        });
      }
    }
  };
  findProductCategoryById = async (req: Request, res: Response) => {
    try {
      const category = await ProductCategories.findById(req.body.id || req.params.id);
      if (!category) {
        res.status(404).json({
          message: 'Category not found',
        });
      }
      res.json(category);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({
          message: error.message,
        });
      }
    }
  };
  updateProductCategory = async (req: Request, res: Response) => {
    try {
      const category = await ProductCategories.findByIdAndUpdate(
        req.body.id || req.params.id,
        req.body,
        { new: true }
      );
      if (!category) {
        res.status(404).json({
          message: 'Product Category not found',
        });
      }
      res.json(category);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({
          message: error.message,
        });
      }
    }
  };
  deleteProductCategory = async (req: Request, res: Response) => {
    try {
      const category = await ProductCategories.findByIdAndDelete(req.body.id || req.params.id);
      if (!category) {
        res.status(404).json({
          message: 'Product Category not found',
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({
          message: error.message,
        });
      }
    }
  };
}

export default new ProductCategoryController();
