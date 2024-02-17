import express from 'express';
import AdminController from '../../controllers/admin-users/admin-controller';

const adminUserRouter = express.Router();

adminUserRouter.post('/create', AdminController.createAdmin);
adminUserRouter.get('/', AdminController.findAllAdmins);
adminUserRouter.get('/:id', AdminController.findAdminById);
adminUserRouter.put('/update/:id', AdminController.updateAdmin);
adminUserRouter.delete('/delete/:id', AdminController.deleteAdmin);

export default adminUserRouter;
