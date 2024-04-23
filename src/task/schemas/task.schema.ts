// user.schema.ts
import * as mongoose from 'mongoose';
import { Priority } from '../constants/task.constants';

export const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      default: 'Medium',
    },
    completed: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    labels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Label' }],
    lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }],
  },
  {
    timestamps: true,
    autoIndex: true,
  },
);

export interface Task extends mongoose.Document {
  title: string;
  description: string;
  dueDate: Date;
  deadLine: string;
  priority: Priority;
  completed: boolean;
  user: mongoose.Schema.Types.ObjectId;
  labels: [mongoose.Schema.Types.ObjectId];
  lists: [mongoose.Schema.Types.ObjectId];
}
