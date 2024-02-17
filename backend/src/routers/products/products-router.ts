import express from 'express';
import ProductController from '../../controllers/products/products';

const productsRouter = express.Router();

productsRouter.post('/create', ProductController.createProduct);
productsRouter.get('/', ProductController.findAllProducts);
productsRouter.get('/:id', ProductController.findProductById);
productsRouter.put('/update/:id', ProductController.updateProduct);
productsRouter.delete('/delete/:id', ProductController.deleteProduct);

export default productsRouter;
