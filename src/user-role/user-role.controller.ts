import { Controller, Get, UseGuards } from '@nestjs/common';
import { RoleGuard } from 'src/guards/role/role.guard';
import { Roles } from 'src/guards/role/roles.dacorator';
import { Role } from 'src/guards/role/roles.enum';

@Controller('user-role')
export class UserRoleController {
  @Get('admin-data')
  @UseGuards(RoleGuard)
  @Roles(Role.Admin)
  getAdminData() {
    return { message: 'Only admin can access' };
  }

  @Get('user-data')
  getUserData() {
    return { message: 'any one can access data' };
  }
}
