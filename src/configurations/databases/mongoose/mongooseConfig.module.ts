import { Module } from '@nestjs/common';
import { MongooseConfigProvider } from './mongooseConfig.provider';
import { GetEnvValuesService } from 'src/configurations/getEnvValues.service';

@Module({
  imports: [],
  providers: [...MongooseConfigProvider, GetEnvValuesService],
  exports: [...MongooseConfigProvider],
})
export class MongooseConfigModule {}
