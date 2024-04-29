import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  NotFoundException,
  UseGuards,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/decorators/role.decorator';
import { Role } from 'src/user/constants/user.constant';
import { Task } from './interfaces/task.interface';

/**
 * Controller responsible for handling HTTP requests related to tasks.
 * Implements CRUD operations for managing tasks.
 */
@ApiTags('Task Routes')
@Controller('task')
export class TaskController {
  /**
   * Constructs the TaskController.
   * @param taskService - The task service instance for task operations.
   */
  constructor(private readonly taskService: TaskService) {}

  /**
   * Creates a new task.
   * @param createTaskDto - The data for creating a task.
   * @returns A Promise containing the newly created task.
   */
  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.USER, Role.ADMIN)
  @ApiResponse({
    status: 201,
    description: 'The task has been successfully created',
  })
  @UsePipes(ValidationPipe)
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.create(createTaskDto);
  }

  /**
   * Retrieves all tasks.
   * @returns A Promise containing an array of tasks.
   */
  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.USER, Role.ADMIN)
  @ApiResponse({
    status: 200,
    description: 'Returns all tasks',
    type: Promise<Task>,
  })
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  /**
   * Retrieves a task by its ID.
   * @param id - The ID of the task to retrieve.
   * @returns A Promise containing the retrieved task, or null if not found.
   */
  @Get(':id')
  @ApiOperation({ summary: 'Get a task by ID' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.USER, Role.ADMIN)
  @ApiParam({ name: 'id', description: 'Task ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns the task',
    type: Promise<Task>,
  })
  @ApiResponse({ status: 404, description: 'Task not found' })
  findOne(@Param('id') id: string): Promise<Task | null> {
    const task = this.taskService.findOne(id);
    if (!task) {
      throw new NotFoundException();
    }
    return task;
  }

  /**
   * Updates a task by its ID.
   * @param id - The ID of the task to update.
   * @param updateTaskDto - The data for updating the task.
   * @returns A Promise containing the updated task, or null if not found.
   */
  @Put(':id')
  @ApiOperation({ summary: 'Update a task by ID' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.USER, Role.ADMIN)
  @ApiParam({ name: 'id', description: 'Task ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns the updated task',
    type: Promise<Task>,
  })
  @ApiResponse({ status: 404, description: 'Task not found' })
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task | null> {
    return this.taskService.update(id, updateTaskDto);
  }

  /**
   * Deletes a task by its ID.
   * @param id - The ID of the task to delete.
   * @returns A Promise indicating if the task was successfully deleted.
   */
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task by ID' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.USER, Role.ADMIN)
  @ApiParam({ name: 'id', description: 'Task ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns true if the task was deleted',
    type: Boolean,
  })
  @ApiResponse({ status: 404, description: 'Task not found' })
  delete(@Param('id') id: string): Promise<boolean> {
    return this.taskService.delete(id);
  }
}
