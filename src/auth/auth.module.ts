import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './straregies/local.auth';
import { UserService } from 'src/user/user.service';
import { userProviders } from 'src/user/user.provider';
import { DatabaseModule } from 'src/configurations/databases/mongoDB/mongo.module';
import { UserController } from 'src/user/user.controller';
import { TaskService } from 'src/task/task.service';
import { TaskController } from 'src/task/task.controller';
import { TaskModule } from 'src/task/task.module';
import { taskProviders } from 'src/task/task.provider';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    TaskModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '90d' },
    }),
  ],
  providers: [
    AuthService,
    UserService,
    TaskService,
    LocalStrategy,
    ...userProviders,
    ...taskProviders,
  ],
  controllers: [AuthController, UserController, TaskController],
})
export class AuthModule {}
