import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { mongooseTaskModelRepositoryProviders } from './providers/mongooseTaskModelRepository.provider';
import { GetEnvValuesService } from 'src/configurations/getEnvValues.service';
import { MongooseConfigModule } from 'src/configurations/databases/mongoose/mongooseConfig.module';
import { UserService } from 'src/user/user.service';
import { mongooseUserModelRepositoryProvider } from 'src/user/providers/mongooseUserModelRepository.provider';
import { TypeOrmMongoConfigModule } from 'src/configurations/databases/typeOrm/mongo/typeOrmMongoConfig.module';
import { TypeOrmMongoUserEntityRepositoryProvider } from 'src/user/providers/typeOrmMongoUserEntityRepository.provider';
import { TypeOrmPostgreConfigModule } from 'src/configurations/databases/typeOrm/postgre/typeOrmPostgreConfig.module';
import { TypeOrmPostgreUserEntityRepositoryProvider } from 'src/user/providers/typeOrmPostgreUserEntityRepoository.provider';

@Module({
  imports: [
    MongooseConfigModule,
    TypeOrmMongoConfigModule,
    TypeOrmPostgreConfigModule,
  ],
  controllers: [TaskController],
  providers: [
    GetEnvValuesService,
    TaskService,
    UserService,
    ...mongooseTaskModelRepositoryProviders,
    ...TypeOrmMongoUserEntityRepositoryProvider,
    ...mongooseUserModelRepositoryProvider,
    ...TypeOrmPostgreUserEntityRepositoryProvider,
  ],
})
export class TaskModule {}
