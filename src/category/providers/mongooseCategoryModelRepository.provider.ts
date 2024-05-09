import { Mongoose } from 'mongoose';
import { CategorySchema } from '../schemas/category.schema';

export const mongooseCategoryModelRepositoryProvider = [
  {
    provide: 'MONGOOSE_CATEGORY_MODEL_REPOSITORY_PROVIDER',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Category', CategorySchema),
    inject: ['MONGOOSE_CONFIG_PROVIDER'],
  },
];
