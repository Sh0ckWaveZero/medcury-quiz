import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('telephone/:telephone/pincode/:pincode')
  findOne(@Param('telephone') telephone: string, @Param('pincode') pincode: number) {
    return this.usersService.findOne(telephone, +pincode);
  }
}
