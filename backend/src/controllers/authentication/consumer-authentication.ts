import jwt from 'jsonwebtoken';
import { Consumers } from '../../config';
import { Request, Response } from 'express';
import { Consumer } from '../../models/consumer';

const secretKey = process.env.KEY ?? 'aRandomStringHere';

class ConsumerAuthController {
  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const consumer = (await Consumers.findOne({ email })) as Consumer;
      if (!consumer) {
        res.status(404).json({
          message: 'No user found',
        });
      }
      const match = consumer?.password === password;
      if (!match) {
        res.status(401).json({
          message: 'Incorrect login details',
        });
      }
      const token = jwt.sign({ id: consumer.id }, secretKey);
      res.json({ token });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({
          message: error.message,
        });
      }
    }
  };
}

export default new ConsumerAuthController();
