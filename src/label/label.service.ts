import { Injectable } from '@nestjs/common';
import { CreateLabelDto } from './dto/create-label.dto';
import { UpdateLabelDto } from './dto/update-label.dto';

@Injectable()
export class LabelService {
  create(createLabelDto: CreateLabelDto) {
    return 'This action adds a new lable';
  }

  findAll() {
    return `This action returns all lable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lable`;
  }

  update(id: number, updateLabelDto: UpdateLabelDto) {
    return `This action updates a #${id} lable`;
  }

  remove(id: number) {
    return `This action removes a #${id} lable`;
  }
}
