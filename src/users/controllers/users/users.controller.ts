import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/service/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUser() {
    return this.userService.fetchUsers();
  }

  @Get('posts')
  getUserPosts() {
    return [
      {
        name: 'newtonfav',
        email: 'gh.oghene@gmail.com',
        posts: [
          { id: '1', title: 'post1' },
          { id: '2', title: 'post 2' },
        ],
      },
    ];
  }

  //class-validator and class-transformer is responsible for validation
  @Post('signup')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: createUserDto) {
    const data = this.userService.createUsers(userData);
    return {
      status: 'success',
      data,
    };
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    const user = this.userService.fetchUserById(id);
    if (!user) {
      throw new HttpException('User not found!', HttpStatus.BAD_GATEWAY);
    }
    return {
      status: 'success',
      data: user,
    };
  }
}
