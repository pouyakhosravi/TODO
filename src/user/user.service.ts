import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { GetEnvValuesService } from 'src/configurations/getEnvValues.service';

/**
 * Service responsible for managing user-related operations.
 * Handles user creation, retrieval, update, and deletion.
 * Utilizes a Mongoose model for database interactions and bcrypt for password hashing.
 */
@Injectable()
export class UserService {
  /**
   * Constructs a new instance of UserService.
   * @param config ConfigService instance for retrieving configuration values.
   * @param userModel Mongoose Model for User entity.
   */
  constructor(
    private readonly config: GetEnvValuesService,
    @Inject('USER_MODEL') private readonly userModel: Model<User>,
  ) {}

  /**
   * Creates a new user in the database.
   * Hashes the user's password for security.
   * @param createUserDto DTO containing user information for creation.
   * @returns Promise<User> Promise resolving to the created user.
   * @throws InternalServerErrorException if an error occurs during user creation.
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = this.config.salt;
    if (!salt) {
      throw new InternalServerErrorException('Salt configuration not found.');
    }
    const newPassword: string = createUserDto.password + salt;
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    createUserDto.password = hashedPassword;

    const newUser = await this.userModel.create(createUserDto);
    if (!newUser) {
      throw new InternalServerErrorException('Failed to create user.');
    }
    return newUser;
  }

  /**
   * Retrieves all users from the database.
   * @returns Promise<Array<User>> Promise resolving to an array of users.
   */
  async findAll(): Promise<Array<User>> {
    return await this.userModel.find();
  }

  /**
   * Finds a user by their email address.
   * @param email Email address of the user to find.
   * @returns Promise<User | null> Promise resolving to the found user or null if not found.
   */
  async findByEmail(email: string): Promise<User | null> {
    return await this.userModel.findOne({ email: email });
  }

  /**
   * Finds a user by their ID.
   * @param id ID of the user to find.
   * @returns Promise<User | null> Promise resolving to the found user or null if not found.
   */
  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id);
  }

  /**
   * Updates a user's information in the database.
   * @param id ID of the user to update.
   * @param updateUserDto DTO containing updated user information.
   * @returns Promise<any> Promise resolving to the update result.
   */
  async update(id: string, updateUserDto: UpdateUserDto): Promise<any> {
    return await this.userModel.updateOne({ _id: id }, updateUserDto);
  }

  /**
   * Deletes a user from the database by their ID.
   * @param id ID of the user to delete.
   * @returns Promise<boolean> Promise resolving to true if deletion was successful, false otherwise.
   */
  async delete(id: string): Promise<boolean> {
    const user = await this.userModel.findByIdAndDelete(id);
    return user ? true : false;
  }
}
