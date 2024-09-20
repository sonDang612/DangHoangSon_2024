import { Post } from '../posts/post';
import { User } from '../users/user';

export type Comment = {
  id: number;
  user: User;
  post: Post;
  content: string;
  createdAt: number;
};
