import { Base } from './base';
import { Schema } from 'mongoose';
import { ProductDto } from './products';
import { v4 as uuidv4 } from 'uuid';

export interface User extends Base {
  name: string;
  email: string;
  storeName: string;
  password: string;
  products?: ProductDto[];
  totalSales?: number;
  totalPurchases?: number;
  address?: string;
  storeIcon?: string;
}

export const UserSchema = new Schema<User>({
  id: { type: String, default: uuidv4 },
  dateCreated: { type: Date, default: Date.now },
  name: String,
  email: String,
  password: String,
  storeName: String,
  products: Array,
  storeIcon: String,
  totalPurchases: Number,
  totalSales: Number,
  address: String,
});

export interface UserCreateForm {
  name: string;
  email: string;
  storeName: string;
  storeIcon?: string;
  password: string;
  address?: string;
}

export interface UserEditForm extends UserCreateForm {
  id: string;
}
