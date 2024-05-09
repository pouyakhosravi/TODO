import mongoose from 'mongoose';

export interface Category extends mongoose.Document {
  _id?: mongoose.Schema.Types.ObjectId;
  name: string;
  user: mongoose.Schema.Types.ObjectId;
  tasks: [mongoose.Schema.Types.ObjectId];
  createdAt?: Date;
  updatedAT?: Date;
}
