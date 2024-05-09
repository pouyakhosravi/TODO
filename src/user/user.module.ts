import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { mongooseUserModelRepositoryProvider } from './providers/mongooseUserModelRepository.provider';
import { GetEnvValuesService } from 'src/configurations/getEnvValues.service';
import { MongooseConfigModule } from 'src/configurations/databases/mongoose/mongooseConfig.module';
import { TypeOrmPostgreConfigModule } from 'src/configurations/databases/typeOrm/postgre/typeOrmPostgreConfig.module';
// import { TypeOrmMongoUserEntityProvider } from './providers/typeOrmMongoUserEntity.provider';
import { TypeOrmMongoConfigModule } from 'src/configurations/databases/typeOrm/mongo/typeOrmMongoConfig.module';
import { TypeOrmPostgreUserEntityRepositoryProvider } from './providers/typeOrmPostgreUserEntityRepoository.provider';
import { TypeOrmMongoUserEntityRepositoryProvider } from './providers/typeOrmMongoUserEntityRepository.provider';
// import { TypeOrmPostgreUserEntityProvider } from './providers/typeOrmPostgreUserEntity.provider';

@Module({
  imports: [
    TypeOrmMongoConfigModule,
    TypeOrmPostgreConfigModule,
    MongooseConfigModule,
  ],
  controllers: [UserController],
  providers: [
    GetEnvValuesService,
    UserService,
    ...mongooseUserModelRepositoryProvider,
    ...TypeOrmPostgreUserEntityRepositoryProvider,
    ...TypeOrmMongoUserEntityRepositoryProvider,
  ],
})
export class UserModule {}
