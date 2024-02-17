import express from 'express';
import OrdersController from '../../controllers/orders/orders';

const ordersRouter = express.Router();

ordersRouter.post('/create', OrdersController.createConsumer);
ordersRouter.get('/user/:id', OrdersController.findAllConsumerOrders)
ordersRouter.get('/store/:id', OrdersController.findAllStoreOrders);
ordersRouter.get('/', OrdersController.findAllOrders);
ordersRouter.get('/:id', OrdersController.findOrderById);
ordersRouter.delete('/delete/:id', OrdersController.deleteOrder);

export default ordersRouter;
