import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { listProviders } from './list.provider';
import { DatabaseModule } from 'src/configurations/databases/mongoDB/mongo.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ListController],
  providers: [ListService, ...listProviders],
})
export class ListModule {}
