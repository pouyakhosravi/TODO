import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { Model } from 'mongoose';
import { List } from './interfaces/list.interface';

/**
 * Service responsible for handling operations related to lists.
 * Implements methods for creating, retrieving, updating, and deleting lists.
 */
@Injectable()
export class ListService {
  constructor(
    /**
     * Injects the List model provided by NestJS.
     */
    @Inject('MONGOOSE_LIST_MODEL_REPOSITORY_PROVIDER')
    private readonly listModel: Model<List>,
  ) {}

  /**
   * Creates a new list based on the provided data.
   * @param createListDto The DTO containing data for creating a new list.
   * @returns A Promise resolving to the created list.
   * @throws InternalServerErrorException if the list creation fails.
   */
  async create(createListDto: CreateListDto): Promise<List> {
    const newList = await this.listModel.create(createListDto);
    if (!newList) {
      throw new InternalServerErrorException('Failed to create list.');
    }
    return newList;
  }

  /**
   * Retrieves all existing lists.
   * @returns A Promise resolving to an array of lists.
   */
  async findAll(): Promise<List[]> {
    return await this.listModel.find();
  }

  /**
   * Retrieves a specific list by its ID.
   * @param id The ID of the list to retrieve.
   * @returns A Promise resolving to the found list or null if not found.
   */
  async findOne(id: number): Promise<List | null> {
    return this.listModel.findById(id);
  }

  /**
   * Updates a specific list by its ID with the provided data.
   * @param id The ID of the list to update.
   * @param updateListDto The DTO containing data for updating the list.
   * @returns A Promise resolving to the updated list or null if not found.
   */
  async update(id: number, updateListDto: UpdateListDto): Promise<List | null> {
    return await this.listModel.findOneAndUpdate({ _id: id }, updateListDto);
  }

  /**
   * Deletes a specific list by its ID.
   * @param id The ID of the list to delete.
   * @returns A Promise resolving to true if the list was deleted successfully, otherwise false.
   */
  async delete(id: number): Promise<boolean> {
    return (await this.listModel.findByIdAndDelete(id)) ? true : false;
  }
}
