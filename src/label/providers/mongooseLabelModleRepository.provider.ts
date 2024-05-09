import { Mongoose } from 'mongoose';
import { LabelSchema } from '../schemas/label.schema';

export const mongooseLabelModelRepositoryProviders = [
  {
    provide: 'MONGOOSE_LABEL_MODEL_REPOSITORY_PROVIDER',
    useFactory: (mongoose: Mongoose) => mongoose.model('Label', LabelSchema),
    inject: ['MONGOOSE_CONFIG_PROVIDER'],
  },
];
