import { Base } from './base';
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
