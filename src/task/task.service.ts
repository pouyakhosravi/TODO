import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model } from 'mongoose';
import { Task } from './interfaces/task.interface';

/**
 * Service responsible for managing task-related operations.
 * Handles the creation, retrieval, updating, and deletion of tasks.
 */
@Injectable()
export class TaskService {
  /**
   * Initializes the TaskService with the injected Task model.
   * @param taskModel The Mongoose model for tasks.
   */
  constructor(@Inject('TASK_MODEL') private readonly taskModel: Model<Task>) {}

  /**
   * Creates a new task with the provided data.
   * @param createTaskDto The DTO containing data for creating a task.
   * @returns A promise that resolves to the created task.
   */
  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.taskModel.create(createTaskDto);
  }

  /**
   * Retrieves all tasks.
   * @returns A promise that resolves to an array of tasks.
   */
  async findAll(): Promise<Array<Task>> {
    return await this.taskModel.find();
  }

  /**
   * Retrieves a task by its ID.
   * @param id The ID of the task to retrieve.
   * @returns A promise that resolves to the retrieved task, or null if not found.
   */
  async findOne(id: string): Promise<Task | null> {
    return await this.taskModel.findOne({ _id: id });
  }

  /**
   * Updates a task with the provided data.
   * @param id The ID of the task to update.
   * @param updateTaskDto The DTO containing data for updating the task.
   * @returns A promise that resolves to the updated task, or null if not found.
   */
  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task | null> {
    return await this.taskModel.findOneAndUpdate({ _id: id }, updateTaskDto);
  }

  /**
   * Deletes a task by its ID.
   * @param id The ID of the task to delete.
   * @returns A promise that resolves to true if the task was successfully deleted, otherwise false.
   */
  async delete(id: string): Promise<boolean> {
    const task = await this.taskModel.deleteOne({ _id: id });
    return task ? true : false;
  }
}
