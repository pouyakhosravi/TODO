import { IsEnum, IsString, Length } from 'class-validator';
import { Priority } from '../constants/task.constants';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Data Transfer Object (DTO) for creating a new task.
 * Used for validating incoming data when creating tasks.
 */
export class CreateTaskDto {
  /**
   * The title of the task.
   * @example 'Finish project'
   * @minLength 1
   * @maxLength 500
   */
  @ApiProperty({
    description: 'The title of the task.',
    example: 'Finish project',
    minLength: 1,
    maxLength: 500,
  })
  @IsString({ message: 'Title must be a string' })
  @Length(1, 500, { message: 'Title must be between 1 and 500 characters' })
  title: string;

  /**
   * The description of the task.
   * @example 'Complete all the remaining tasks by the end of the week'
   */
  @ApiProperty({
    description: 'The description of the task.',
    example: 'Complete all the remaining tasks by the end of the week',
  })
  @IsString({ message: 'Description must be a string' })
  description: string;

  /**
   * The priority of the task.
   * @example HIGH
   * @enum {Priority}
   */
  @ApiProperty({
    description: 'The priority of the task.',
    example: 'HIGH',
    enum: Priority,
  })
  @IsEnum(Priority, { message: 'Priority must be one of the specified values' })
  priority: Priority;
}
