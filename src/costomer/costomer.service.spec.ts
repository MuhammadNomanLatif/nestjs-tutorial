import { Test, TestingModule } from '@nestjs/testing';
import { CostomerService } from './costomer.service';

describe('CostomerService', () => {
  let service: CostomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CostomerService],
    }).compile();

    service = module.get<CostomerService>(CostomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
