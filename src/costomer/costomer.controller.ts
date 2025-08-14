import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCustomerDto  } from './dto/create-costomer.dto';
import { CostomerService } from './costomer.service';

@Controller('costomer')
export class CostomerController {
  constructor(private readonly costomerService: CostomerService) {}

  @Get()
  getAllCustomer() {
    return this.costomerService.getAllCustomers();
  }
  @Post()
  addCostomer(@Body() createCostomerDto: CreateCustomerDto ) {
    return this.costomerService.addCustomer(createCostomerDto);
  }
}
