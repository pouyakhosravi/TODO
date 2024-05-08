import { Module } from '@nestjs/common';
import { GetEnvValuesService } from 'src/configurations/getEnvValues.service';
import { TypeOrmMongoConfigProvider } from './typeOrmMongoConfig.provider';

@Module({
  imports: [],
  providers: [...TypeOrmMongoConfigProvider, GetEnvValuesService],
  exports: [...TypeOrmMongoConfigProvider],
})
export class TypeOrmMongoConfigModule {}
