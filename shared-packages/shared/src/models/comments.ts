import { Base } from './base';

export interface ProductComment extends Base {
  title: string;
  user: string;
  description: string;
  rating: number;
}

export interface ProductCommentCreate {
  title: string;
  description: string;
  rating: number;
}

export interface ProductCommentEdit extends ProductCommentCreate {
  id: string;
}
