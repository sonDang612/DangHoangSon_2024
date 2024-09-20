import { Injectable } from '@nestjs/common';
import { CommentType } from './comment';

@Injectable()
export class CommentsServices {
  create(comment: CommentType) {
    return 'created';
  }

  get(id: number) {
    return 'id';
  }

  getAll() {
    return 'All';
  }

  update(id: number, user: CommentType) {
    return 'updated';
  }

  delete(id: number) {
    return 'deleted';
  }
}
