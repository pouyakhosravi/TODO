import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
});

export interface Category extends mongoose.Document {
  name: string;
  user: mongoose.Schema.Types.ObjectId;
  tasks: [mongoose.Schema.Types.ObjectId];
}
