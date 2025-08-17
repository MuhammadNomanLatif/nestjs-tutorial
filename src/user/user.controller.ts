import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

// this dacorator denfine the route in this case "user"
@Controller('user') //Decorator is special type of function  that is used add mate data
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  create() {
    return this.userService.createUser();
  }
  @Get()
  getUser() {
    return this.userService.findAll();
  }
}
