import { DocumentBuilder } from '@nestjs/swagger';

const swaggerConfigs = new DocumentBuilder()
  .setTitle('TODO App')
  .addBearerAuth()
  .setVersion('1.0')
  .addTag('User Routes')
  .addTag('Task Routes')
  .addTag('List Routes')
  .addTag('Category Routes')
  .addTag('Auth Routes')
  .build();

export { swaggerConfigs };
