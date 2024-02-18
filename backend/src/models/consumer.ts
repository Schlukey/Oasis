import { Base } from './base';
import { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Order } from './orders';

export interface Consumer extends Base {
  email: string;
  name: string;
  password: string;
  orders?: Order[];
  address: string;
}

export const ConsumerSchema = new Schema<Consumer>({
  id: { type: String, default: uuidv4 },
  dateCreated: { type: Date, default: Date.now },
  email: String,
  password: String,
  name: String,
  orders: Array,
});

export interface CreateConsumer {
  email: string;
  name?: string;
  adress: string;
  password: string;
}
