import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import type { User } from './interface/user';
import { UserDto, UserParamsDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  postUser(@Body() user: UserDto): User {
    return this.userService.addUser(user);
  }

  @Delete('/:email')
  @UsePipes(new ValidationPipe())
  deleteUser(@Param() params: UserParamsDto): User[] {
    return this.userService.deleteUser(params.email);
  }
}
