import { Base } from './base';
export interface AdminUser extends Base {
    email: string;
    password: string;
}
export interface AdminUserCreate {
    email: string;
    password: string;
}
export interface AdminUserEdit extends AdminUserCreate {
    id: string;
}
