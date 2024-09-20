import { User } from '../users/user';

export type Post = {
  id: number;
  user: User;
  title: string;
  content: string;
  createdAt: number;
};
