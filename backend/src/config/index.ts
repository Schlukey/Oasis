import mongoose from 'mongoose';
import express from 'express';
import { UserSchema } from '../models/user';
import { AdminUserSchema } from '../models/admins';
import { ConsumerSchema } from '../models/consumer';
import { OrderSchema } from '../models/orders';
import { ProductSchema } from '../models/products';
import { ProductCategorySchema } from '../models/product-categories';
import dotenv from 'dotenv';

dotenv.config();

const baseUrl =
  process.env.CONNECTION ??
  'mongodb+srv://lukequinn51:QRF3dfkXPnPwfqEZ@projectoasis.r1xa4ka.mongodb.net/';

export const Users = mongoose.model('Users', UserSchema);
export const AdminUsers = mongoose.model('Admin Users', AdminUserSchema);
export const Consumers = mongoose.model('Consumers', ConsumerSchema);
export const Products = mongoose.model('Products', ProductSchema);
export const Orders = mongoose.model('Orders', OrderSchema);
export const ProductCategories = mongoose.model(
  'Product Categories',
  ProductCategorySchema
);

const db = mongoose.connection;
const app = express();

exports.connect = () => {
  mongoose
    .connect(baseUrl)
    .then(() => {
      console.log('connected to db');
    })
    .catch((e) => {
      console.log(`connection failed: ${e}`);
      process.exit(1);
    });
};
