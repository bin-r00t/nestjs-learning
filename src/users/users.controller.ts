import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/create')
  createUser(@Body() body: CreateUserDto) {
    const { email, password } = body;
    return this.userService.create(email, password);
  }

  @Get('/all')
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
