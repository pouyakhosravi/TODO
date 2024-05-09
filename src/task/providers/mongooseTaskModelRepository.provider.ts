import { Mongoose } from 'mongoose';
import { TaskSchema } from '../schemas/task.schema';

/**
 * Factory function for creating task model providers.
 * It creates a provider for the Task model using Mongoose.
 */
export const mongooseTaskModelRepositoryProviders = [
  {
    provide: 'MONGOOSE_TASK_MODEL_REPOSITORY_PROVIDER',
    useFactory: (mongoose: Mongoose) => mongoose.model('Task', TaskSchema),
    inject: ['MONGOOSE_CONFIG_PROVIDER'],
  },
];
