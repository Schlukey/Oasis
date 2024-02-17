import { Base } from './base';
import { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { ProductDto } from './products';

export interface Order extends Base {
  buyer: string;
  seller: string;
  products: ProductDto[];
}

export const OrderSchema = new Schema<Order>({
  id: { type: String, default: uuidv4 },
  dateCreated: { type: Date, default: Date.now },
  buyer: String,
  seller: String,
  products: Array,
});

export interface OrderFormData {
    buyer: string;
    seller: string;
    products: string[];
}