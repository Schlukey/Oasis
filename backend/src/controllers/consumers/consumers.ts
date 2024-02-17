import { Consumers } from '../../config';
import { Request, Response } from 'express';

class ConsumersController {
  createConsumer = async (req: Request, res: Response) => {
    try {
      const consumer = new Consumers({
        email: req.body.email,
        name: req.body.name,
        address: req.body.address,
        password: req.body.password,
      });
      await consumer.save();
      res.json(consumer);
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json({
          message: e.message,
        });
      }
    }
  };
  findAllConsumers = async (req: Request, res: Response) => {
    try {
      const consumers = await Consumers.find();
      res.json(consumers);
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json({
          message: e.message,
        });
      }
    }
  };
  findConsumerById = async (req: Request, res: Response) => {
    try {
      const consumer = await Consumers.findById(req.body.id || req.params.id);
      if (!consumer) {
        res.status(404).json({
          message: 'No user found',
        });
      }
      res.json(consumer);
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json({
          message: e.message,
        });
      }
    }
  };
  updateConsumer = async (req: Request, res: Response) => {
    try {
      const consumer = await Consumers.findByIdAndUpdate(
        req.body.id || req.params.id,
        req.body,
        { new: true }
      );
      if (!consumer) {
        res.status(404).json({
          message: 'No consumer found',
        });
      }
      res.json(consumer);
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json({
          message: e.message,
        });
      }
    }
  };
  deleteConsumer = async (req: Request, res: Response) => {
    try {
      const consumer = await Consumers.findByIdAndDelete(req.body.id || req.params.id);
      if (!consumer) {
        res.status(404).json({
          message: 'No consumer found',
        });
      }
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json({
          message: e.message,
        });
      }
    }
  };
}

export default new ConsumersController();
