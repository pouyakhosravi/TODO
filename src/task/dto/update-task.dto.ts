import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import * as mongoose from 'mongoose';
import { IsDate, IsBoolean, IsArray, ArrayUnique } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Data Transfer Object (DTO) for updating an existing task.
 * Extends the CreateTaskDto with partial properties.
 * Used for validating incoming data when updating tasks.
 */
export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  /**
   * The due date of the task.
   * @example '2024-04-30T23:59:59.999Z'
   */
  @ApiProperty({
    description: 'The due date of the task.',
    example: '2024-04-30T23:59:59.999Z',
  })
  @IsDate({ message: 'Due date must be a valid date' })
  dueDate: Date;

  /**
   * Indicates whether the task is completed.
   * @example true
   */
  @ApiProperty({
    description: 'Indicates whether the task is completed.',
    example: true,
  })
  @IsBoolean({ message: 'Completed must be a boolean value' })
  completed: boolean;

  /**
   * The ID of the user associated with the task.
   * @example '606c9ce6b791dc00152e79f3'
   */
  @ApiProperty({
    description: 'The ID of the user associated with the task.',
    example: '606c9ce6b791dc00152e79f3',
  })
  user: mongoose.Schema.Types.ObjectId;

  /**
   * The IDs of labels associated with the task.
   * @example ['606c9ce6b791dc00152e79f3', '606c9ce6b791dc00152e79f4']
   */
  @ApiProperty({
    description: 'The IDs of labels associated with the task.',
    example: ['606c9ce6b791dc00152e79f3', '606c9ce6b791dc00152e79f4'],
  })
  @IsArray({ message: 'Labels must be provided as an array' })
  @ArrayUnique({ message: 'Labels must be unique' })
  labels: mongoose.Schema.Types.ObjectId[];

  /**
   * The IDs of lists associated with the task.
   * @example ['606c9ce6b791dc00152e79f3', '606c9ce6b791dc00152e79f4']
   */
  @ApiProperty({
    description: 'The IDs of lists associated with the task.',
    example: ['606c9ce6b791dc00152e79f3', '606c9ce6b791dc00152e79f4'],
  })
  @IsArray({ message: 'Lists must be provided as an array' })
  @ArrayUnique({ message: 'Lists must be unique' })
  lists: mongoose.Schema.Types.ObjectId[];
}
