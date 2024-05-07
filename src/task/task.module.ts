import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { DatabaseModule } from 'src/configurations/databases/mongoDB/mongo.module';
import { taskProviders } from './task.provider';
import { UserService } from 'src/user/user.service';
import { userProviders } from 'src/user/user.provider';
import { GetEnvValuesService } from 'src/configurations/getEnvValues.service';

/**
 * Module for managing tasks within the application.
 * Responsible for handling task-related operations, including CRUD functionalities.
 */
@Module({
  imports: [DatabaseModule],
  controllers: [TaskController],
  providers: [
    GetEnvValuesService,
    /**
     * Service responsible for task-related operations and business logic.
     */
    TaskService,
    /**
     * Service responsible for user-related operations, required for task management.
     */
    UserService,
    /**
     * Providers for task-related database operations.
     */
    ...taskProviders,
    /**
     * Providers for user-related database operations, required for task management.
     */
    ...userProviders,
  ],
})
export class TaskModule {}
