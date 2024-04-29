import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MinLength,
  Matches,
  Validate,
  Length,
  IsNotEmpty,
} from 'class-validator';
import { IsEmail } from 'class-validator';

/**
 * Data transfer object (DTO) for creating a new user.
 */
export class CreateUserDto {
  /**
   * The first name of the user.
   * @example 'John'
   * @minimum 3
   * @maximum 50
   */
  @ApiProperty({
    description: 'The first name of the user',
    type: String,
    minLength: 3,
    maxLength: 50,
    example: 'John',
  })
  @IsString({ message: 'First name must be a string' })
  @Length(3, 50, {
    message: 'First name must be between 3 and 50 characters long',
  })
  @IsNotEmpty({ message: 'First name cannot be empty' })
  firstName: string;

  /**
   * The last name of the user.
   * @example 'Doe'
   * @minimum 3
   * @maximum 50
   */
  @ApiProperty({
    description: 'The last name of the user',
    type: String,
    minLength: 3,
    maxLength: 50,
    example: 'Doe',
  })
  @IsString({ message: 'Last name must be a string' })
  @Length(3, 50, {
    message: 'Last name must be between 3 and 50 characters long',
  })
  @IsNotEmpty({ message: 'Last name cannot be empty' })
  lastName: string;

  /**
   * The email address of the user.
   * @example 'john.doe@example.com'
   * @format email
   */
  @ApiProperty({
    description: 'The email address of the user',
    type: String,
    format: 'email',
    example: 'john.doe@example.com',
  })
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @Validate(IsValidEmailFormat, {
    message: 'Email address must follow a valid structure',
  })
  email: string;

  /**
   * The password of the user.
   * @example 'Password123!'
   * @minimum 8
   */
  @ApiProperty({
    description: 'The password of the user',
    type: String,
    minLength: 8,
    example: 'Password123!',
  })
  @IsString({ message: 'Password must be a string' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    {
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    },
  )
  password: string;
}

/**
 * Validates if the provided email address follows a valid structure.
 * @param value - The email address to validate.
 * @returns A boolean indicating whether the email address is valid.
 */
function IsValidEmailFormat(value: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return typeof value === 'string' && emailRegex.test(value);
}
