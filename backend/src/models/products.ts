import { Base } from './base';
import { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { ProductCategory } from './product-categories';

export interface ProductDto extends Base {
  name: string;
  category: ProductCategory;
  thumbnail: string;
  productImages?: string[];
  description: string;
  comments: string[]
}

export const ProductSchema = new Schema<ProductDto>({
  id: { type: String, default: uuidv4 },
  dateCreated: { type: Date, default: Date.now },
  name: String,
  category: String,
  thumbnail: String,
  productImages: Array,
  description: String,
});

export interface ProductCreateForm {
  name: string;
  category: ProductCategory;
  thumbail: string;
  productImages?: string[];
  description: string;
}

export interface ProductEditForm extends ProductCreateForm {
  id: string;
}
