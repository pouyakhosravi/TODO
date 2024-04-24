import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LabelService } from './label.service';
import { CreateLabelDto } from './dto/create-label.dto';
import { UpdateLabelDto } from './dto/update-label.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Label Routes')
@Controller('label')
export class LabelController {
  constructor(private readonly labelService: LabelService) {}

  @Post()
  create(@Body() createLableDto: CreateLabelDto) {
    return this.labelService.create(createLableDto);
  }

  @Get()
  findAll() {
    return this.labelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.labelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLableDto: UpdateLabelDto) {
    return this.labelService.update(+id, updateLableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.labelService.remove(+id);
  }
}
