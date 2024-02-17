import express from 'express';
import ConsumersController from '../../controllers/consumers/consumers';

const consumersRouter = express.Router();

consumersRouter.post('/create', ConsumersController.createConsumer);
consumersRouter.get('/', ConsumersController.findAllConsumers);
consumersRouter.get(':id', ConsumersController.findConsumerById);
consumersRouter.put('/update/:id', ConsumersController.updateConsumer);
consumersRouter.delete('/delete/:id', ConsumersController.deleteConsumer);

export default consumersRouter;
