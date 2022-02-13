import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('filter')
  findByFilter(@Query() query: any) {
    return this.usersService.findByFilter(query);
  }
}
