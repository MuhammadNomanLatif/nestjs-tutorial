import { Test, TestingModule } from '@nestjs/testing';
import { CostomerController } from './costomer.controller';

describe('CostomerController', () => {
  let controller: CostomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CostomerController],
    }).compile();

    controller = module.get<CostomerController>(CostomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
