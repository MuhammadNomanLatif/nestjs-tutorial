import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/commen/pipes/uppercase/uppercase.pipe';

@Controller('myname')
export class MynameController {
  @Post('custom') // Define a custom route
  transformName(@Body('name', new UppercasePipe()) name: string) {
    return {message:`Recevied name ${name}`}
  }
}
