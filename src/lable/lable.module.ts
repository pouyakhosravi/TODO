import { Module } from '@nestjs/common';
import { LableService } from './lable.service';
import { LableController } from './lable.controller';
import { labelProviders } from './lable.provider';
import { DatabaseModule } from 'src/configurations/databases/mongoDB/mongo.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LableController],
  providers: [LableService, ...labelProviders],
})
export class LableModule {}
