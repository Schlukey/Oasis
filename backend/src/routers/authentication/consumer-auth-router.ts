import express from 'express';
import consumerAuthentication from '../../controllers/authentication/consumer-authentication';

const consumerAuthRouter = express.Router();

consumerAuthRouter.post('/login', consumerAuthentication.login);

export default consumerAuthRouter;
