import { Orders } from '../../config';
import { Request, Response } from 'express';

class OrdersController {
  createConsumer = async (req: Request, res: Response) => {
    try {
      const order = new Orders({
        buyer: req.body.buyer,
        seller: req.body.seller,
        products: req.body.products,
      });
      await order.save();
      res.json(order);
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json({
          message: e.message,
        });
      }
    }
  };
  findAllOrders = async (req: Request, res: Response) => {
    try {
      const orders = await Orders.find();
      res.json(orders);
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json({
          message: e.message,
        });
      }
    }
  };
  findOrderById = async (req: Request, res: Response) => {
    try {
      const order = await Orders.findById(req.body.id || req.params.id);
      if (!order) {
        res.status(404).json({
          message: 'No order found',
        });
      }
      res.json(order);
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json({
          message: e.message,
        });
      }
    }
  };
  findAllConsumerOrders = async (req: Request, res: Response) => {
    try {
      const orders = await Orders.find();
      const userOrders = orders.filter((x) => x.buyer === req.body.id);
      res.json(userOrders);
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json({
          message: e.message,
        });
      }
    }
  };
  findAllStoreOrders = async (req: Request, res: Response) => {
    try {
      const orders = await Orders.find();
      const storeOrders = orders.filter((x) => x.seller === req.body.id);
      res.json(storeOrders);
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json({
          message: e.message,
        });
      }
    }
  };
  deleteOrder = async (req: Request, res: Response) => {
    try {
      const order = await Orders.findByIdAndDelete(req.body.id);
      if (!order) {
        res.status(404).json({
          message: 'Order not found',
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

export default new OrdersController();
