import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfigs } from './configurations/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api/v1');

  const document = SwaggerModule.createDocument(app, swaggerConfigs);
  SwaggerModule.setup('api/v1/doc', app, document);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('app.port');

  await app.listen(port || 3002);
  Logger.log(`App is running on port ${port}`);
}
bootstrap();
