import { Mongoose } from 'mongoose';
import { UserSchema } from './schemas/user.shcema';

export const userProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('User', UserSchema),
    inject: ['MONGO_DB_CONNECTION'],
  },
];
