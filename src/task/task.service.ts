import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model } from 'mongoose';
import { Task } from './interfaces/task.interface';

@Injectable()
export class TaskService {
  constructor(
    @Inject('MONGOOSE_TASK_MODEL_REPOSITORY_PROVIDER')
    private readonly mongooseTaskRepository: Model<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.mongooseTaskRepository.create(createTaskDto);
  }

  async findAll(): Promise<Array<Task>> {
    return await this.mongooseTaskRepository.find();
  }

  async findOne(id: string): Promise<Task | null> {
    return await this.mongooseTaskRepository.findOne({ _id: id });
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task | null> {
    return await this.mongooseTaskRepository.findOneAndUpdate(
      { _id: id },
      updateTaskDto,
    );
  }

  /**
   * Deletes a task by its ID.
   * @param id The ID of the task to delete.
   * @returns A promise that resolves to true if the task was successfully deleted, otherwise false.
   */
  async delete(id: string): Promise<boolean> {
    const task = await this.mongooseTaskRepository.deleteOne({ _id: id });
    return task ? true : false;
  }
}
