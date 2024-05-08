import { Mongoose } from 'mongoose';
import { UserSchema } from '../schemas/user.schema';

/**
 * Provider for the User model in the database.
 * It defines how the User model should be created and injected into the application.
 */
export const mongooseUserModelRepositoryProvider = [
  {
    provide: 'MONGOOSE_USER_MODEL_REPOSITORY_PROVIDER',
    useFactory: (mongoose: Mongoose) => mongoose.model('User', UserSchema),
    inject: ['MONGOOSE_CONFIG_PROVIDER'],
  },
];
