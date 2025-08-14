import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
  @Get()
  getAllProducts() {
    return 'the employee set successfully';
  }
}
