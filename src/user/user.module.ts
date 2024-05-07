import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/configurations/databases/mongoDB/mongo.module';
import { userProviders } from './user.provider';
import { GetEnvValuesService } from 'src/configurations/getEnvValues.service';

/**
 * Module responsible for managing user-related functionality.
 * Imports DatabaseModule to establish database connectivity.
 * Provides UserService and userProviders for dependency injection.
 * Exposes UserController to handle HTTP requests related to users.
 */
@Module({
  imports: [DatabaseModule], // Importing DatabaseModule for establishing database connectivity.
  controllers: [UserController], // Exposing UserController to handle HTTP requests related to users.
  providers: [GetEnvValuesService, UserService, ...userProviders], // Providing UserService and userProviders for dependency injection.
})
export class UserModule {}
