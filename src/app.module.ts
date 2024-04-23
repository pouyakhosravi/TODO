import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envValues } from './configurations/app.configuration';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ListModule } from './list/list.module';
import { CategoryModule } from './category/category.module';
import { LabelModule } from './label/label.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envValues],
    }),
    TaskModule,
    UserModule,
    AuthModule,
    ListModule,
    CategoryModule,
    LabelModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
