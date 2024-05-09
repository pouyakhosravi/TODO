import { Mongoose, Model } from 'mongoose';
import { List } from '../interfaces/list.interface';
import { ListSchema } from '../schemas/list.schema';

export const mongooseListModelRepositoryProviders = [
  {
    provide: 'MONGOOSE_LIST_MODEL_REPOSITORY_PROVIDER',
    useFactory: (mongoose: Mongoose): Model<List> =>
      mongoose.model<List>('List', ListSchema),
    inject: ['MONGOOSE_CONFIG_PROVIDER'], // Injects the MongoDB connection provided by the MongooseModule
  },
];
