import { Base } from './base';
import { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface ProductComment extends Base {
  title: string;
  user: string;
  description: string;
  rating: number;
}

export const ProductCommentSchema = new Schema<ProductComment>({
  id: { type: String, default: uuidv4 },
  dateCreated: { type: Date, default: Date.now },
  title: String,
  description: String,
  rating: Number,
  user: String,
});

export interface ProductCommentCreate {
  title: string;
  description: string;
  rating: number;
}

export interface ProductCommentEdit extends ProductCommentCreate {
  id: string;
}
