import express from 'express';
import userAuthentication from '../../controllers/authentication/user-authentication';

const userAuthRouter = express.Router();

userAuthRouter.post('login', userAuthentication.login);

export default userAuthRouter;