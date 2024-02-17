import { Base } from './base';
import { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface ProductCategory extends Base {
  name: string;
  description: string;
}

export interface ProductCategoryCreate {
  name: string;
  description: string;
}

export interface ProductCategoryEdit extends ProductCategoryCreate {
  id: string;
}

export const ProductCategorySchema = new Schema<ProductCategory>({
  id: { type: String, default: uuidv4 },
  dateCreated: { type: Date, default: Date.now },
  name: String,
  description: String,
});
