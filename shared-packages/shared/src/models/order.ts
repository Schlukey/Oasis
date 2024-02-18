import { Base } from './base';
import { ProductDto } from './products';

export interface Order extends Base {
  buyer: string;
  seller: string;
  products: ProductDto[];
}

export interface OrderCreate {
    buyer: string;
    seller: string;
    products: string[];
}