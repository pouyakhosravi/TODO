import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ListService } from './list.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';
import { List } from './interfaces/list.interface';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/role.guard';

/**
 * Controller handling HTTP requests related to lists.
 * Responsible for creating, retrieving, updating, and deleting lists.
 */
@ApiTags('List Routes')
@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  /**
   * Handles HTTP POST request to create a new list.
   * @param createListDto The DTO containing data for creating a new list.
   * @returns A Promise resolving to the created list.
   */
  @ApiOperation({ summary: 'Create a new list' })
  @ApiBody({ type: CreateListDto })
  @Post()
  async create(@Body() createListDto: CreateListDto): Promise<List> {
    return this.listService.create(createListDto);
  }

  /**
   * Handles HTTP GET request to retrieve all lists.
   * @returns A Promise resolving to an array of lists.
   */
  @ApiOperation({ summary: 'Get all lists' })
  @Get()
  @UseGuards(AuthGuard, RolesGuard)
  async findAll(): Promise<List[]> {
    return this.listService.findAll();
  }

  /**
   * Handles HTTP GET request to retrieve a specific list by its ID.
   * @param id The ID of the list to retrieve.
   * @returns A Promise resolving to the found list or null if not found.
   */
  @ApiOperation({ summary: 'Get a list by ID' })
  @ApiParam({ name: 'id', description: 'List ID' })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<List | null> {
    return this.listService.findOne(+id);
  }

  /**
   * Handles HTTP PATCH request to update a specific list by its ID.
   * @param id The ID of the list to update.
   * @param updateListDto The DTO containing data for updating the list.
   * @returns A Promise resolving to the updated list or null if not found.
   */
  @ApiOperation({ summary: 'Update a list by ID' })
  @ApiParam({ name: 'id', description: 'List ID' })
  @ApiBody({ type: UpdateListDto })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateListDto: UpdateListDto,
  ): Promise<List | null> {
    return this.listService.update(+id, updateListDto);
  }

  /**
   * Handles HTTP DELETE request to delete a specific list by its ID.
   * @param id The ID of the list to delete.
   * @returns A Promise resolving to true if the list was deleted successfully, otherwise false.
   */
  @ApiOperation({ summary: 'Delete a list by ID' })
  @ApiParam({ name: 'id', description: 'List ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns true if the list was deleted successfully',
  })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return this.listService.delete(+id);
  }
}
