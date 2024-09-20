import { Injectable } from '@nestjs/common';
import { PostType } from './post';

@Injectable()
export class PostsServices {
  create(post: PostType) {
    return 'created';
  }

  get(id: number) {
    return 'id';
  }

  getAll() {
    return 'All';
  }

  update(id: number, user: PostType) {
    return 'updated';
  }

  delete(id: number) {
    return 'deleted';
  }
}
