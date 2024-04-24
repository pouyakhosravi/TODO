import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/decorators/role.decorator';
import { Role } from './constants/user.constant';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

/**
 * Controller responsible for handling user-related operations.
 * Includes endpoints for user creation, retrieval, update, and deletion.
 */
@ApiTags('User Routes')
@Controller('user')
export class UserController {
  /**
   * UserController constructor
   * @param userService Instance of UserService used for user operations.
   */
  constructor(private readonly userService: UserService) {}

  /**
   * Endpoint to create a new user.
   * @param createUserDto DTO containing user information for creation.
   * @returns {Promise<User>} Promise resolving to the created user.
   */
  @Post('/signup')
  @UsePipes(ValidationPipe)
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  /**
   * Endpoint to retrieve all users.
   * Requires authentication and specific roles.
   * @returns {Promise<Array<User>>} Promise resolving to an array of users.
   */
  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.USER, Role.ADMIN, Role.SUPER_ADMIN)
  findAll(): Promise<Array<User>> {
    return this.userService.findAll();
  }

  /**
   * Endpoint to retrieve a user by ID.
   * Requires authentication and specific roles.
   * @param id ID of the user to retrieve.
   * @returns {Promise<User | null>} Promise resolving to the found user or null if not found.
   */
  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.findById(id);
  }

  /**
   * Endpoint to update a user's information.
   * Requires authentication and specific roles.
   * @param id ID of the user to update.
   * @param updateUserDto DTO containing updated user information.
   */
  @Put(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @UsePipes(ValidationPipe)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  /**
   * Endpoint to delete a user by ID.
   * Requires authentication and specific roles.
   * @param id ID of the user to delete.
   * @returns {Promise<boolean>} Promise resolving to true if deletion was successful, false otherwise.
   */
  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER, Role.SUPER_ADMIN)
  remove(@Param('id') id: string): Promise<boolean> {
    return this.userService.delete(id);
  }
}
