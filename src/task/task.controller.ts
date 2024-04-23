import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { RolesGuard } from 'src/auth/guards/role.guard';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  // @UseGuards(RolesGuard)
  findAll(): Promise<Array<Task>> {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Task | void {
    const task = this.taskService.findOne(id);

    if (!task) {
      throw new NotFoundException();
    }

    return task;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Task | void {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Task {
    return this.taskService.delete(id);
  }
}
