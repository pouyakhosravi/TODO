import {
  IsString,
  MinLength,
  Matches,
  Validate,
  Length,
  IsNotEmpty,
} from 'class-validator';
import { IsEmail } from 'class-validator';

// Custom email structure validator
function IsValidEmailFormat(value: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return typeof value === 'string' && emailRegex.test(value);
}

export class CreateUserDto {
  @IsString({ message: 'First name must be a string' })
  @Length(3, 50, {
    message: 'First name must be between 3 and 50 characters long',
  })
  @IsNotEmpty({ message: 'First name cannot be empty' })
  firstName: string;

  @IsString({ message: 'Last name must be a string' })
  @Length(3, 50, {
    message: 'Last name must be between 3 and 50 characters long',
  })
  @IsNotEmpty({ message: 'Last name cannot be empty' })
  lastName: string;

  @IsEmail({}, { message: 'Please provide a valid email address' })
  @Validate(IsValidEmailFormat, {
    message: 'Email address must follow a valid structure',
  })
  email: string;

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
