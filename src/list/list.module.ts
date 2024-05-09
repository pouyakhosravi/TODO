import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { mongooseListModelRepositoryProviders } from './providers/mongooseListModelRepository.provider';
import { MongooseConfigModule } from 'src/configurations/databases/mongoose/mongooseConfig.module';
import { GetEnvValuesService } from 'src/configurations/getEnvValues.service';
import { UserService } from 'src/user/user.service';
import { TypeOrmPostgreConfigModule } from 'src/configurations/databases/typeOrm/postgre/typeOrmPostgreConfig.module';
import { TypeOrmMongoConfigModule } from 'src/configurations/databases/typeOrm/mongo/typeOrmMongoConfig.module';
import { mongooseUserModelRepositoryProvider } from 'src/user/providers/mongooseUserModelRepository.provider';
import { TypeOrmPostgreUserEntityRepositoryProvider } from 'src/user/providers/typeOrmPostgreUserEntityRepoository.provider';
import { TypeOrmMongoUserEntityRepositoryProvider } from 'src/user/providers/typeOrmMongoUserEntityRepository.provider';

/**
 * Module encapsulating functionality related to lists.
 * Registers providers, controllers, and imports necessary dependencies for working with lists.
 */
@Module({
  imports: [
    MongooseConfigModule,
    TypeOrmMongoConfigModule,
    TypeOrmPostgreConfigModule,
  ], // Imports the DatabaseModule to establish MongoDB connection
  controllers: [ListController], // Registers the ListController to handle HTTP requests related to lists
  providers: [
    GetEnvValuesService,
    UserService,
    ListService, // Registers the ListService to handle business logic related to lists
    ...mongooseListModelRepositoryProviders, // Registers providers for the List model
    ...mongooseUserModelRepositoryProvider,
    ...TypeOrmPostgreUserEntityRepositoryProvider,
    ...TypeOrmMongoUserEntityRepositoryProvider,
  ],
})
export class ListModule {}
