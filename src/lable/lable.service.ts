import { Injectable } from '@nestjs/common';
import { CreateLableDto } from './dto/create-lable.dto';
import { UpdateLableDto } from './dto/update-lable.dto';

@Injectable()
export class LableService {
  create(createLableDto: CreateLableDto) {
    return 'This action adds a new lable';
  }

  findAll() {
    return `This action returns all lable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lable`;
  }

  update(id: number, updateLableDto: UpdateLableDto) {
    return `This action updates a #${id} lable`;
  }

  remove(id: number) {
    return `This action removes a #${id} lable`;
  }
}
