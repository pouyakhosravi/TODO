import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { environmentsValuesOptions } from './configurations/getEnvValues.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { ListModule } from './list/list.module';
import { CategoryModule } from './category/category.module';
import { LabelModule } from './label/label.module';

@Module({
  imports: [
    ConfigModule.forRoot(environmentsValuesOptions),
    AuthModule,
    UserModule,
    TaskModule,
    CategoryModule,
    ListModule,
    LabelModule,
  ],
})
export class AppModule {}
