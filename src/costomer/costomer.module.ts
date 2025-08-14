import { Module } from '@nestjs/common';
import { CostomerService } from './costomer.service';
import { CostomerController } from './costomer.controller';

@Module({
  providers: [CostomerService],
  controllers: [CostomerController]
})
export class CostomerModule {}
