import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { environmentsValuesOptions } from './configurations/getEnvValues.service';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ListModule } from './list/list.module';
import { CategoryModule } from './category/category.module';
import { LabelModule } from './label/label.module';

@Module({
  imports: [
    ConfigModule.forRoot(environmentsValuesOptions),
    TaskModule,
    UserModule,
    AuthModule,
    ListModule,
    CategoryModule,
    LabelModule,
  ],
})
export class AppModule {}
