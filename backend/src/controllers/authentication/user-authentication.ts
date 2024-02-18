import jwt from 'jsonwebtoken';
import { Users } from '../../config';
import { Request, Response } from 'express';
import { User } from '../../models/user';

const secretKey = process.env.KEY ?? 'aRandomStringHere';

class UserAuthController {
  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const user = (await Users.findOne({ email })) as User;
      if (!user) {
        res.status(404).json({
          message: 'No user found',
        });
      }
      const match = user?.password === password;
      if (!match) {
        res.status(401).json({
          message: 'Incorrect login details',
        });
      }
      const token = jwt.sign({ id: user.id }, secretKey);
      res.json({ token });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({
          message: error.message,
        });
      }
    }
  };
};

export default new UserAuthController();

