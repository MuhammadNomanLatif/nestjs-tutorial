import { Controller, Get } from '@nestjs/common';

// this dacorator denfine the route in this case "user"
@Controller('user') //Decorator is special type of function  that is used add mate data
export class UserController {
  @Get()
  getUser() {
    return 'user data fatched succesfully !!!';
  }
}
