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
      required: true,
    },
  },
  {
    timestamps: true,
    autoIndex: true,
  },
);
