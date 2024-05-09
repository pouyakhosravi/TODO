import { Module } from '@nestjs/common';
import { LabelService as LabelService } from './label.service';
import { LabelController } from './label.controller';
import { mongooseLabelModelRepositoryProviders } from './providers/mongooseLabelModleRepository.provider';
import { MongooseConfigModule } from 'src/configurations/databases/mongoose/mongooseConfig.module';

@Module({
  imports: [MongooseConfigModule],
  controllers: [LabelController],
  providers: [LabelService, ...mongooseLabelModelRepositoryProviders],
})
export class LabelModule {}
