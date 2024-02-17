import express from 'express';
import UsersController from '../../controllers/users/users';

const usersRouter = express.Router();

usersRouter.post('/create', UsersController.createUser);
usersRouter.get('/', UsersController.findAllUsers);
usersRouter.get('/:id', UsersController.findUserById);
usersRouter.put('/update/:id', UsersController.updateUser);
usersRouter.delete('/delete/:id', UsersController.deleteUser);

export default usersRouter;
