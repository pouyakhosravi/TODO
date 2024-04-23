import * as mongoose from 'mongoose';
import { Role } from '../constants/user.constant';

export const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
    lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }],
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    labels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Label' }],
    roles: {
      type: [String],
      enum: Role,
      default: ['USER'],
    },
  },
  {
    timestamps: true,
    autoIndex: true,
  },
);

export interface User extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  tasks: [mongoose.Schema.Types.ObjectId];
  lists: [mongoose.Schema.Types.ObjectId];
  categories: [mongoose.Schema.Types.ObjectId];
  labels: [mongoose.Schema.Types.ObjectId];
  roles: [string];
}
