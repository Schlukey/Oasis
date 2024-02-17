import { Base } from './base';
import { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface AdminUser extends Base {
  email: string;
}

export const AdminUserSchema = new Schema<AdminUser>({
  id: { type: String, default: uuidv4 },
  dateCreated: { type: Date, default: Date.now },
  email: String,
});

export interface AdminUserCreate {
  email: string;
  password: string;
}

export interface AdminUserEdit extends AdminUserCreate {
  id: string;
}
