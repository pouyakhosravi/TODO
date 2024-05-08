import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { categoryProviders } from './category.provider';
import { MongooseConfigModule } from 'src/configurations/databases/mongoose/mongooseConfig.module';

@Module({
  imports: [MongooseConfigModule],
  controllers: [CategoryController],
  providers: [CategoryService, ...categoryProviders],
})
export class CategoryModule {}
