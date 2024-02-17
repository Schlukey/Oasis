import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import usersRouter from './routers/users/users-router';
import adminUserRouter from './routers/admin-users/admin-users-router';
import consumersRouter from './routers/consumers/consumers-router';
import ordersRouter from './routers/orders/orders-router';
import productsRouter from './routers/products/products-router';
import productCategoryRouter from './routers/product-categories/product-categoies-router';

const app = express();
require('./config/index').connect();
const port = process.env.PORT || 4200;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', usersRouter);
app.use('/admin-users', adminUserRouter);
app.use('/consumer', consumersRouter);
app.use('/orders', ordersRouter);
app.use('/products', productsRouter);
app.use('/product-categories', productCategoryRouter);
