import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfigs } from './configurations/swagger.config';
import { GetEnvValuesService } from './configurations/getEnvValues.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api/v1');

  const document = SwaggerModule.createDocument(app, swaggerConfigs);
  SwaggerModule.setup('api/v1/doc', app, document);

  const config = app.get(GetEnvValuesService);
  if (config.app.port) {
    await app.listen(config.app.port);
    Logger.log(`App is running on port ${config.app.port}`);
  } else {
    throw new InternalServerErrorException();
  }
}
bootstrap();
