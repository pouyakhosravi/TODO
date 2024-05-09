import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './interfaces/category.interface';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('MONGOOSE_CATEGORY_MODEL_REPOSITORY_PROVIDER')
    private readonly mongooseCategoryRepository: Model<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.mongooseCategoryRepository.create(createCategoryDto);
  }

  async findAll(): Promise<Array<Category>> {
    return await this.mongooseCategoryRepository.find();
  }

  async findOne(id: number): Promise<Category | null> {
    return await this.mongooseCategoryRepository.findOne({ _id: id });
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category | null> {
    return await this.mongooseCategoryRepository.findOneAndUpdate(
      { _id: id },
      updateCategoryDto,
    );
  }

  async delete(id: number): Promise<boolean> {
    const user = await this.mongooseCategoryRepository.findByIdAndDelete(id);
    return user ? true : false;
  }
}
