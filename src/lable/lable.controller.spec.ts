import { Test, TestingModule } from '@nestjs/testing';
import { LableController } from './lable.controller';
import { LableService } from './lable.service';

describe('LableController', () => {
  let controller: LableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LableController],
      providers: [LableService],
    }).compile();

    controller = module.get<LableController>(LableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
