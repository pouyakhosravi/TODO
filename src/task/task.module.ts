import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { taskProviders } from './task.provider';
import { UserService } from 'src/user/user.service';
import { GetEnvValuesService } from 'src/configurations/getEnvValues.service';
import { MongooseConfigModule } from 'src/configurations/databases/mongoose/mongooseConfig.module';

/**
 * Module for managing tasks within the application.
 * Responsible for handling task-related operations, including CRUD functionalities.
 */
@Module({
  imports: [MongooseConfigModule],
  controllers: [TaskController],
  providers: [
    GetEnvValuesService,
    /**
     * Service responsible for task-related operations and business logic.
     */
    TaskService,
    UserService,
    ...taskProviders,
  ],
})
export class TaskModule {}
