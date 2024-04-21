import { Module } from '@nestjs/common';
import { mongoDBProviders } from './mongo.provider';

@Module({
  providers: [...mongoDBProviders],
  exports: [...mongoDBProviders],
})
export class DatabaseModule {}
