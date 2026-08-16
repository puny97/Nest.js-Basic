import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
  public users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  getuser(email: string): User {
    const user = this.users.filter((user) => user.email === email);
    if (user && Array.isArray(user) && user.length > 0) {
      return user[0];
    }
    throw new NotFoundException('User not found');
  }

  addUser(user: User): User {
    this.users.push(user);
    return user;
  }

  deleteUser(email: string): User[] {
    const remainingUsers = this.users.filter((user) => user.email !== email);
    this.users = remainingUsers;
    return remainingUsers;
  }
}
