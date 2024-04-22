import { Mongoose } from 'mongoose';
import { CategorySchema } from './schemas/category.schema';

export const categoryProviders = [
  {
    provide: 'CATEGORY_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Category', CategorySchema),
    inject: ['MONGO_DB_CONNECTION'],
  },
];
