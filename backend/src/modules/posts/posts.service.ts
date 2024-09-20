import { Injectable } from '@nestjs/common';
import { Post } from './post';

@Injectable()
export class PostsServices {
  create(post: Post) {
    return 'created';
  }

  get(id: number) {
    return 'id';
  }

  getAll() {
    return 'All';
  }

  update(id: number, user: Post) {
    return 'updated';
  }

  delete(id: number) {
    return 'deleted';
  }
}
