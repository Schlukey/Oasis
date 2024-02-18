import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { AdminUsers } from '../config';

const secretKey = process.env.KEY ?? 'aRandomStringHere';

const userAuthenticate = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Login required' });
  }
  try {
    const decodedToken = jwt.verify(token, secretKey);
    const user = await AdminUsers.findById((decodedToken as any).id);
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json('Authentication required');
  }
};
export default userAuthenticate;