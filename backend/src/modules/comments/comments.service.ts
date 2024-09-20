import { Injectable } from '@nestjs/common';
import { Comment } from './comment';

@Injectable()
export class CommentsServices {
  create(comment: Comment) {
    return 'created';
  }

  get(id: number) {
    return 'id';
  }

  getAll() {
    return 'All';
  }

  update(id: number, user: Comment) {
    return 'updated';
  }

  delete(id: number) {
    return 'deleted';
  }
}
