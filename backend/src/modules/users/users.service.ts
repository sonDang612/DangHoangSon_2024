import { Injectable } from '@nestjs/common';
import { UserType } from './user';

@Injectable()
export class UsersService {
  create(user: UserType) {
    return 'created';
  }

  get(id: number) {
    return 'id';
  }

  getAll() {
    return 'All';
  }

  update(id: number, user: UserType) {
    return 'updated';
  }

  delete(id: number) {
    return 'deleted';
  }
}
