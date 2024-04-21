import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envValues } from './configurations/app.configuration';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envValues],
    }),
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
