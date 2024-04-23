import * as mongoose from 'mongoose';
export interface User {
  _id?: mongoose.Schema.Types.ObjectId;
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
