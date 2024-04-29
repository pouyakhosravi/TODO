import { Mongoose } from 'mongoose';
import { UserSchema } from './schemas/user.schema';

/**
 * Provider for the User model in the database.
 * It defines how the User model should be created and injected into the application.
 */
export const userProviders = [
  {
    /**
     * The unique token used for injecting the User model.
     */
    provide: 'USER_MODEL',

    /**
     * Factory function to create the User model using Mongoose.
     * @param mongoose The Mongoose instance for creating the model.
     * @returns The User model.
     */
    useFactory: (mongoose: Mongoose) => mongoose.model('User', UserSchema),

    /**
     * Dependencies to be injected.
     */
    inject: ['MONGO_DB_CONNECTION'],
  },
];
