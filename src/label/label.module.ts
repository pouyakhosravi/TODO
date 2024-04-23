import { Module } from '@nestjs/common';
import { LabelService as LabelService } from './label.service';
import { LabelController } from './label.controller';
import { labelProviders } from './lable.provider';
import { DatabaseModule } from 'src/configurations/databases/mongoDB/mongo.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LabelController],
  providers: [LabelService, ...labelProviders],
})
export class LabelModule {}
