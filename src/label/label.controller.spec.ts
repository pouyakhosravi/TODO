import { Test, TestingModule } from '@nestjs/testing';
import { LabelController as LabelController } from './label.controller';
import { LabelService as LabelService } from './label.service';

describe('LabelController', () => {
  let controller: LabelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LabelController],
      providers: [LabelService],
    }).compile();

    controller = module.get<LabelController>(LabelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
