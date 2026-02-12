import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
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

  @Get('/:id')
  findById(@Param('id') id: number) {
    console.log('[*] get id', id);
    return this.userService.getById(id);
  }

  @Get('/findByEmail/:email')
  findByEmail(@Param('email') email: string) {
    console.log('[*] find by email', email);
    return this.userService.getByEmail(email);
  }

  @Put('/:id')
  updateUser(@Param('id') id: number, @Body() body: any) {
    console.log('[*] update by id', id, body);
    return this.userService.update(id, body);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    console.log('[*] delete user', id);
    return this.userService.remove(id);
  }
}
