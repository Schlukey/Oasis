import express from 'express';
import ProductCategoryController from '../../controllers/product-categories/product-categories';

const productCategoryRouter = express.Router();

productCategoryRouter.post('/create', ProductCategoryController.createProductCategory);
productCategoryRouter.get('/', ProductCategoryController.findAllProductCategories);
productCategoryRouter.get('/:id', ProductCategoryController.findProductCategoryById);
productCategoryRouter.put('/update/:id', ProductCategoryController.updateProductCategory);
productCategoryRouter.delete('/delete/:id', ProductCategoryController.deleteProductCategory);

export default productCategoryRouter;