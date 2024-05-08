import { Module } from '@nestjs/common';
import { GetEnvValuesService } from 'src/configurations/getEnvValues.service';
import { TypeOrmPostgreConfigProvider } from './typeOrmPostgreConfig.provider';

@Module({
  imports: [],
  providers: [...TypeOrmPostgreConfigProvider, GetEnvValuesService],
  exports: [...TypeOrmPostgreConfigProvider],
})
export class TypeOrmPostgreConfigModule {}
