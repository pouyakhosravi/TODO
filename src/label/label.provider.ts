import { Mongoose } from 'mongoose';
import { LabelSchema } from './schemas/label.schema';

export const labelProviders = [
  {
    provide: 'Label_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Label', LabelSchema),
    inject: ['MONGOOSE_CONFIG_PROVIDER'],
  },
];
