import { Products } from '../../config';
import { Request, Response } from 'express';

class ProductsController {
  createProduct = async (req: Request, res: Response) => {
    try {
      const product = new Products({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        thumbnail: req.body.thumbnail,
        productImages: req.body.productImages,
      });
      await product.save();
      res.json(product);
    } catch (error) {
      if (error instanceof Error) {
        res.status(404).json({
          message: error.message,
        });
      }
    }
  };
  findAllProducts = async (req: Request, res: Response) => {
    try {
      const products = await Products.find();
      res.json(products);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({
          message: error.message,
        });
      }
    }
  };
  findProductById = async (req: Request, res: Response) => {
    try {
      const product = await Products.findById(req.body.id || req.params.id);
      res.json(product);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({
          message: error.message,
        });
      }
    }
  };
  updateProduct = async (req: Request, res: Response) => {
    try {
      const product = await Products.findByIdAndUpdate(req.body.id || req.params.id, req.body, {
        new: true,
      });
      if (!product) {
        res.status(404).json({
          message: 'Product not found',
        });
      }
      res.json(product);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({
          message: error.message,
        });
      }
    }
  };
  deleteProduct = async (req: Request, res: Response) => {
    try {
      const product = await Products.findByIdAndDelete(req.body.id || req.params.id);
      if (!product) {
        res.status(404).json({
          message: 'Product not found',
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

export default new ProductsController();
