import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { listProviders } from './list.provider';
import { MongooseConfigModule } from 'src/configurations/databases/mongoose/mongooseConfig.module';

/**
 * Module encapsulating functionality related to lists.
 * Registers providers, controllers, and imports necessary dependencies for working with lists.
 */
@Module({
  imports: [MongooseConfigModule], // Imports the DatabaseModule to establish MongoDB connection
  controllers: [ListController], // Registers the ListController to handle HTTP requests related to lists
  providers: [
    ListService, // Registers the ListService to handle business logic related to lists
    ...listProviders, // Registers providers for the List model
  ],
})
export class ListModule {}
