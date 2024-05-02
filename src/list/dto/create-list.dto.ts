import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, ArrayNotEmpty, IsOptional } from 'class-validator';

/**
 * Data transfer object (DTO) for creating a new list.
 */
export class CreateListDto {
  /**
   * The name of the list.
   */
  @ApiProperty({
    description: 'The name of the list',
  })
  @IsString()
  name: string;

  /**
   * The ID of the user who owns the list.
   */
  @ApiProperty({
    description: 'The ID of the user who owns the list',
  })
  @IsString()
  user: string;

  /**
   * Array of task IDs associated with the list.
   * Optional field.
   */
  @ApiProperty({
    description: 'Array of task IDs associated with the list',
    type: [String],
    example: ['6058cdbc7a074b2d9cbea6e2', '6058cdbc7a074b2d9cbea6e3'],
  })
  @IsArray()
  @ArrayNotEmpty()
  @IsOptional()
  tasks: string[];

  /**
   * Array of category IDs associated with the list.
   * Optional field.
   */
  @ApiProperty({
    description: 'Array of category IDs associated with the list',
    type: [String],
    example: ['6058cdbc7a074b2d9cbea6e4', '6058cdbc7a074b2d9cbea6e5'],
  })
  @IsArray()
  @ArrayNotEmpty()
  @IsOptional()
  category: string[];
}
