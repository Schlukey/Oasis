import { Base } from './base';
import { ProductDto } from './products';
export interface User extends Base {
    name: string;
    storeName: string;
    storeIcon: string;
    email: string;
    password: string;
    address?: string;
    products?: ProductDto[];
    sales?: number;
    purchases: number;
}
export interface UserCreateForm {
    name: string;
    email: string;
    storeName: string;
    storeIcon?: string;
    password: string;
    address?: string;
}
export interface UserEditForm extends UserCreateForm {
    id: string;
}
