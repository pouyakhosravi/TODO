// user.schema.ts
import * as mongoose from 'mongoose';

export const ListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

export interface List extends mongoose.Document {
  name: string;
  user: mongoose.Schema.Types.ObjectId;
  tasks: [mongoose.Schema.Types.ObjectId];
  category: [mongoose.Schema.Types.ObjectId];
}
