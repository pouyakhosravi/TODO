import { Test, TestingModule } from '@nestjs/testing';
import { LableService } from './lable.service';

describe('LableService', () => {
  let service: LableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LableService],
    }).compile();

    service = module.get<LableService>(LableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
