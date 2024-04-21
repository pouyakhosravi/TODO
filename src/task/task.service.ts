import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model } from 'mongoose';
import { Task } from './interfaces/task.interface';

@Injectable()
export class TaskService {
  constructor(@Inject('TASK_MODEL') private readonly taskModel: Model<Task>) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.taskModel.create(createTaskDto);
  }

  async findAll(): Promise<Array<Task>> {
    return await this.taskModel.find();
  }

  async findOne(id: string): Promise<Task | null> {
    return await this.taskModel.findOne({ taskID: id });
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task | null> {
    return await this.taskModel.findOneAndUpdate({ taskID: id }, updateTaskDto);
  }

  async delete(id: string): Promise<void> {
    await this.taskModel.deleteOne({ taskID: id });
  }
}
