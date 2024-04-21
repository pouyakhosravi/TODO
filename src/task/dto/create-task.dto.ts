import { IsEnum, IsString } from 'class-validator';
import { Priority, TaskStatus } from '../constants/task.constants';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsString()
  deadLine: string;

  @IsEnum(Priority)
  priority: Priority;

  @IsString()
  userId: string;

  @IsString()
  categoryId: string;

  @IsString()
  listId: string;
}
