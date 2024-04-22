import { Mongoose } from 'mongoose';
import { ListSchema } from './schemas/list.schema';

export const listProviders = [
  {
    provide: 'List_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('List', ListSchema),
    inject: ['MONGO_DB_CONNECTION'],
  },
];
