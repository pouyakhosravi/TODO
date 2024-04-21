import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../constants/task.constants';

@Injectable()
export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatus = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isStatusVAlid(value)) {
      throw new BadRequestException(`"$value" is an invaluid status`);
    }
    return value;
  }

  private isStatusVAlid(status: any) {
    const idx = this.allowedStatus.indexOf(status);
    return idx !== -``;
  }
}
