import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { Role } from '../constants/user.constant';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Data transfer object (DTO) for updating a user's information.
 * Extends the CreateUserDto to inherit its properties.
 */
export class UpdateUserDto extends PartialType(CreateUserDto) {
  /**
   * An array of task IDs associated with the user.
   * @example ['task1', 'task2']
   * @isArray true
   */
  @ApiProperty({
    description: 'An array of task IDs associated with the user',
    type: [String],
    example: ['task1', 'task2'],
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tasks?: string[];

  /**
   * An array of list IDs associated with the user.
   * @example ['list1', 'list2']
   * @isArray true
   */
  @ApiProperty({
    description: 'An array of list IDs associated with the user',
    type: [String],
    example: ['list1', 'list2'],
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  lists?: string[];

  /**
   * An array of category names associated with the user.
   * @example ['category1', 'category2']
   * @isArray true
   */
  @ApiProperty({
    description: 'An array of category names associated with the user',
    type: [String],
    example: ['category1', 'category2'],
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  categories?: string[];

  /**
   * An array of label names associated with the user.
   * @example ['label1', 'label2']
   * @isArray true
   */
  @ApiProperty({
    description: 'An array of label names associated with the user',
    type: [String],
    example: ['label1', 'label2'],
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  labels?: string[];

  /**
   * An array of roles assigned to the user.
   * @example ['ADMIN', 'USER']
   * @isArray true
   */
  @ApiProperty({
    description: 'An array of roles assigned to the user',
    enum: Role,
    example: [Role.ADMIN, Role.USER],
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsEnum(Role, { each: true })
  roles?: Role[];
}
