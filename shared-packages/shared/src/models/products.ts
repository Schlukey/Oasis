import { Base } from './base';
import { ProductCategory } from './product-categories';

export interface ProductDto extends Base {
  name: string;
  category: ProductCategory;
  thumbnail: string;
  productImages?: string[];
  description: string;
  comments: Comment[]
}

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
