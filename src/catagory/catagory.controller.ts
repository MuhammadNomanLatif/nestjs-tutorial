import { Controller, Get } from '@nestjs/common';
import { CatagoryService } from './catagory.service';

@Controller('catagory')
export class CatagoryController {
  constructor(private readonly catagoryService: CatagoryService) {}
  @Get()
  getAllcatagory() {
    return this.catagoryService.getCatagory();
  }
}
