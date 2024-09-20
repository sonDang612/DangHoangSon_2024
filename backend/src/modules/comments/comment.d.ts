import { Post } from 'src/modules/posts/post';
import { User } from 'src/modules/users/user';

export type CommentType = {
  id: number;
  user: User;
  post: Post;
  content: string;
  createdAt: number;
};
