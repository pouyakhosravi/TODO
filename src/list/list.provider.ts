import { Mongoose, Model } from 'mongoose';
import { List } from './interfaces/list.interface';
import { ListSchema } from './schemas/list.schema';

/**
 * Provides a Mongoose model for the List collection.
 * Enables dependency injection for the List model throughout the application.
 */
export const listProviders = [
  /**
   * Definition of the List model provider.
   */
  {
    /**
     * The name by which the List model will be provided.
     */
    provide: 'LIST_MODEL',

    /**
     * Factory function to create the List model using Mongoose.
     * @param mongoose The Mongoose instance injected by the NestJS framework.
     * @returns The List model.
     */
    useFactory: (mongoose: Mongoose): Model<List> =>
      mongoose.model<List>('List', ListSchema),

    /**
     * Specifies the dependencies that need to be injected into the factory function.
     */
    inject: ['MONGOOSE_CONFIG_PROVIDER'], // Injects the MongoDB connection provided by the MongooseModule
  },
];
