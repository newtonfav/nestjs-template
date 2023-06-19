import {
  Controller,
  Get,
  Res,
  Post,
  Req,
  Body,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUser(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return [
      { name: 'Favour Oghenekohwo', email: 'gh.oghene@gmail.com', sortBy },
    ];
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
    return {
      status: 'success',
      data: userData,
    };
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return {
      status: 'success',
      data: id,
    };
  }
}
