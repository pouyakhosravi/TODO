import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.auth';
import { UserService } from 'src/user/user.service';
import { mongooseUserModelRepositoryProvider } from 'src/user/providers/mongooseUserModelRepository.provider';
import { UserController } from 'src/user/user.controller';
import { TaskService } from 'src/task/task.service';
import { TaskController } from 'src/task/task.controller';
import { TaskModule } from 'src/task/task.module';
import { taskProviders } from 'src/task/task.provider';
import { GetEnvValuesService } from 'src/configurations/getEnvValues.service';
// import { TypeOrmMongoConfigModule } from 'src/configurations/databases/typeOrm/mongo/typeOrmMongoConfig.module';
import { MongooseConfigModule } from 'src/configurations/databases/mongoose/mongooseConfig.module';
import { TypeOrmMongoUserEntityRepositoryProvider } from 'src/user/providers/typeOrmMongoUserEntityRepository.provider';
import { TypeOrmPostgreConfigModule } from 'src/configurations/databases/typeOrm/postgre/typeOrmPostgreConfig.module';
import { TypeOrmPostgreUserEntityRepositoryProvider } from 'src/user/providers/typeOrmPostgreUserEntityRepoository.provider';

@Module({
  imports: [
    MongooseConfigModule,
    TypeOrmPostgreConfigModule,
    // TypeOrmMongoConfigModule,
    UserModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '90d' },
    }),
  ],
  providers: [
    GetEnvValuesService,
    AuthService,
    UserService,
    LocalStrategy,
    ...mongooseUserModelRepositoryProvider,
    ...TypeOrmPostgreUserEntityRepositoryProvider,
    // ...TypeOrmMongoUserEntityProvider,
  ],
  controllers: [AuthController, UserController],
})
export class AuthModule {}
