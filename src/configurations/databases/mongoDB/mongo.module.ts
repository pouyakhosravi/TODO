import { Module } from '@nestjs/common';
import { mongoDBProviders } from './mongo.provider';
import { GetEnvValuesService } from 'src/configurations/getEnvValues.service';

@Module({
  imports: [],
  providers: [...mongoDBProviders, GetEnvValuesService],
  exports: [...mongoDBProviders],
})
export class DatabaseModule {}
