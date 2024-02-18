import { Base } from './base';
import { Order } from './order';

export interface Consumer extends Base {
  email: string;
  name: string;
  password: string;
  orders?: Order[];
  address: string;
}

export interface CreateConsumer {
  email: string;
  name?: string;
  adress: string;
  password: string;
}
