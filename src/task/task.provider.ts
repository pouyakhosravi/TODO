import { Mongoose } from 'mongoose';
import { TaskSchema } from './schemas/task.schema';

/**
 * Factory function for creating task model providers.
 * It creates a provider for the Task model using Mongoose.
 */
export const taskProviders = [
  {
    /**
     * Provider token for the Task model.
     */
    provide: 'TASK_MODEL',

    /**
     * Factory function to create the Task model.
     * @param mongoose - The Mongoose instance.
     * @returns The Task model created using Mongoose.
     */
    useFactory: (mongoose: Mongoose) => mongoose.model('Task', TaskSchema),

    /**
     * Dependencies to inject into the factory function.
     */
    inject: ['MONGO_DB_CONNECTION'],
  },
];
