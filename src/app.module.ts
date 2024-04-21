import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { envValues } from './configurations/app.configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envValues],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
