import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UsersService {
  create(user: User) {
    return 'created';
  }

  get(id: number) {
    return 'id';
  }

  getAll() {
    return 'All';
  }

  update(id: number, user: User) {
    return 'updated';
  }

  delete(id: number) {
    return 'deleted';
  }
}
