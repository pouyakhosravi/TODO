import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LableService } from './lable.service';
import { CreateLableDto } from './dto/create-lable.dto';
import { UpdateLableDto } from './dto/update-lable.dto';

@Controller('lable')
export class LableController {
  constructor(private readonly lableService: LableService) {}

  @Post()
  create(@Body() createLableDto: CreateLableDto) {
    return this.lableService.create(createLableDto);
  }

  @Get()
  findAll() {
    return this.lableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lableService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLableDto: UpdateLableDto) {
    return this.lableService.update(+id, updateLableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lableService.remove(+id);
  }
}
