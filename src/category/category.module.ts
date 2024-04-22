import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { categoryProviders } from './category.provider';
import { DatabaseModule } from 'src/configurations/databases/mongoDB/mongo.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [CategoryService, ...categoryProviders],
})
export class CategoryModule {}
