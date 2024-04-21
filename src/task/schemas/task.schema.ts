// user.schema.ts
import * as mongoose from 'mongoose';
import { Priority, TaskStatus } from '../constants/task.constants';

export const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  deadLine: String,
  priority: String,
  userId: String,
  categoryId: String,
  listId: String,
});

export interface Task extends mongoose.Document {
  title: string;
  description: string;
  status: TaskStatus;
  deadLine: string;
  priority: Priority;
  userId: string;
  categoryId: string;
  listId: string;
}
