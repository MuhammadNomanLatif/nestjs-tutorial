import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseservie: DatabaseService) {}

  @Get('status')
  getStatus() {
    return {
      status: this.databaseservie.getStatus(),
    };
  }
}
