import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserType } from './user';
import { CreateUserForm } from './dtos/create-user.form';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() createPostDto: CreateUserForm) {
    let user: UserType;
    return this.usersService.create(user);
  }

  @Get()
  findAll() {
    return this.usersService.getAll();
  }

  @Get(':id')
  find(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.get(id);
  }

  @Delete()
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }

  @Put()
  update(@Param('id', ParseIntPipe) id: number) {
    let user: UserType;
    return this.usersService.update(id, user);
  }
}
