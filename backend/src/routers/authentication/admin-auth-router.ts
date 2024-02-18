import express from 'express';
import adminAuthentication from '../../controllers/authentication/admin-authentication';

const adminAuthRouter = express.Router();

adminAuthRouter.post('login', adminAuthentication.login);

export default adminAuthRouter;