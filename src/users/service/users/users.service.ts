import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private userTemp = [
    {
      username: 'newtonfav',
      firstName: 'favour',
      lastName: 'oghenekowho',
      email: 'example@gmail.com',
    },
    {
      username: 'exampledu',
      firstName: 'john',
      lastName: 'doe',
      email: 'johndoe@example.com',
    },
  ];

  fetchUsers() {
    return this.userTemp;
  }

  createUsers(userDetails: CreateUserType) {
    this.userTemp.push(userDetails);
    return userDetails;
  }

  fetchUserById(id: number) {
    return {
      id,
      firstName: 'favour',
      lastName: 'oghenekwho',
      email: 'example@gmail.com',
    };
  }
}
