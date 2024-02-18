import { Users } from '../../config';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

class UserController {
  createUser = async (req: Request, res: Response) => {
    try {
      const user = new Users({
        name: req.body.name,
        email: req.body.email,
        storeName: req.body.storeName,
        storeIcon: req.body.storeIcon,
        password: req.body.password,
        address: req.body.address,
      });
      user.save();
      res.json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({
          message: error.message,
        });
      }
    }
  };
  findAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await Users.find();
      res.json(users);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({
          message: error.message,
        });
      }
    }
  };
  findUserById = async (req: Request, res: Response) => {
    try {
      const user = await Users.findById(req.body.id || req.params.id);
      if (!user) {
        res.status(404).json({
          message: 'User not found',
        });
      }
      res.json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({
          message: error.message,
        });
      }
    }
  };
  updateUser = async (req: Request, res: Response) => {
    try {
      const user = await Users.findByIdAndUpdate(req.body.id || req.params.id, req.body, {
        new: true,
      });
      if (!user) {
        res.status(404).json({
          message: 'User not found',
        });
      }
      res.json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({
          message: error.message,
        });
      }
    }
  };
  deleteUser = async (req: Request, res: Response) => {
    try {
      const user = await Users.findByIdAndDelete(req.body.id || req.params.id);
      if (!user) {
        res.status(404).json({
          message: 'User not found',
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

export default new UserController();
