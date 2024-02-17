import { AdminUsers } from '../../config';
import { Request, Response } from 'express';

class AdminController {
  createAdmin = async (req: Request, res: Response) => {
    try {
      const admin = new AdminUsers({
        email: req.body.email,
        password: req.body.password,
      });
      await admin.save();
      res.json(admin)
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json({
          message: e.message,
        });
      }
    }
  };
  findAllAdmins = async (req: Request, res: Response) => {
    try {
      const admins = await AdminUsers.find();
      res.json(admins);
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json({
          message: e.message,
        });
      }
    }
  };
  findAdminById = async (req: Request, res: Response) => {
    try {
      const admin = await AdminUsers.findById(req.body.id || req.params.id);
      if (!admin) {
        res.status(404).json({
          message: 'No Admin user found',
        });
      }
      res.json(admin);
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json({
          message: e.message,
        });
      }
    }
  };
  updateAdmin = async (req: Request, res: Response) => {
    try {
      const admin = await AdminUsers.findOneAndUpdate(req.body.id || req.params.id, req.body, {
        new: true,
      });
      if (!admin) {
        res.status(404).json({
          message: 'No Admin user found',
        });
      }
      res.json(admin);
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json({
          message: e.message,
        });
      }
    }
  };
  deleteAdmin = async (req: Request, res: Response) => {
    try {
      const admin = await AdminUsers.findByIdAndDelete(req.body.id || req.params.id);
      if (!admin) {
        res.status(404).json({
          message: 'No admin user found',
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

export default new AdminController();
